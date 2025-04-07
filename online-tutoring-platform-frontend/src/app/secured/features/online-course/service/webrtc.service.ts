// webrtc.service.ts
import { Injectable } from '@angular/core';
import { ClassroomService } from './classroom.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';

interface PeerConnection {
  [key: string]: RTCPeerConnection;
}

@Injectable({
  providedIn: 'root'
})
export class WebRTCService {
  private peerConnections: PeerConnection = {};
  private localStream: MediaStream | null = null;
  private remoteStreams: { [key: string]: MediaStream } = {};
  private socket$!: WebSocketSubject<any>;
  private remoteStreamAddedSubject = new Subject<{peerId: string, stream: MediaStream}>();
  private remoteStreamRemovedSubject = new Subject<string>();

  remoteStreamAdded$ = this.remoteStreamAddedSubject.asObservable();
  remoteStreamRemoved$ = this.remoteStreamRemovedSubject.asObservable();

  constructor(private classroomService: ClassroomService) {}

  async getUserMedia(constraints: MediaStreamConstraints): Promise<MediaStream> {
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia(constraints);
      return this.localStream;
    } catch (error) {
      console.error('Error accessing media devices:', error);
      throw error;
    }
  }

  async initPeerConnections(sessionId: string, isTutor: boolean): Promise<void> {
    // Initialize WebSocket connection for signaling
    this.socket$ = webSocket(`wss://your-spring-boot-api.com/ws`);
    
    this.socket$.subscribe({
      next: (message) => this.handleSignalingMessage(message),
      error: (err) => console.error('WebSocket error:', err),
      complete: () => console.log('WebSocket connection closed')
    });

    // Get ICE servers
    const iceServers = await this.classroomService.getIceServers().toPromise();

    if (isTutor) {
      // Tutor waits for students to join
      this.socket$.next({
        type: 'register',
        sessionId,
        role: 'tutor'
      });
    } else {
      // Student connects to tutor
      this.socket$.next({
        type: 'register',
        sessionId,
        role: 'student'
      });
    }
  }

  private handleSignalingMessage(message: any): void {
    switch (message.type) {
      case 'offer':
        this.handleOffer(message);
        break;
      case 'answer':
        this.handleAnswer(message);
        break;
      case 'candidate':
        this.handleICECandidate(message);
        break;
      case 'newPeer':
        this.handleNewPeer(message.peerId);
        break;
      case 'peerLeft':
        this.handlePeerLeft(message.peerId);
        break;
    }
  }

  private async handleOffer(message: any): Promise<void> {
    const peerId = message.from;
    const pc = this.createPeerConnection(peerId);

    await pc.setRemoteDescription(new RTCSessionDescription(message.offer));
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);

    this.socket$.next({
      type: 'answer',
      to: peerId,
      answer: answer
    });
  }

  private async handleAnswer(message: any): Promise<void> {
    const pc = this.peerConnections[message.from];
    if (pc) {
      await pc.setRemoteDescription(new RTCSessionDescription(message.answer));
    }
  }

  private handleICECandidate(message: any): void {
    const pc = this.peerConnections[message.from];
    if (pc) {
      pc.addIceCandidate(new RTCIceCandidate(message.candidate));
    }
  }

  private handleNewPeer(peerId: string): void {
    if (this.peerConnections[peerId]) return;

    const pc = this.createPeerConnection(peerId);
    
    // Only the tutor initiates the offer
    if (this.localStream && this.localStream.getTracks().length > 0) {
      this.localStream.getTracks().forEach(track => {
        pc.addTrack(track, this.localStream!);
      });

      this.createOffer(pc, peerId);
    }
  }

  private async createOffer(pc: RTCPeerConnection, peerId: string): Promise<void> {
    try {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      this.socket$.next({
        type: 'offer',
        to: peerId,
        offer: offer
      });
    } catch (error) {
      console.error('Error creating offer:', error);
    }
  }

  private createPeerConnection(peerId: string): RTCPeerConnection {
    const pc = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        // Add your TURN servers here if needed
      ]
    });

    this.peerConnections[peerId] = pc;

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        this.socket$.next({
          type: 'candidate',
          to: peerId,
          candidate: event.candidate
        });
      }
    };

    pc.ontrack = (event) => {
      const stream = event.streams[0];
      this.remoteStreams[peerId] = stream;
      this.remoteStreamAddedSubject.next({ peerId, stream });
    };

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'disconnected' || pc.connectionState === 'failed') {
        this.handlePeerLeft(peerId);
      }
    };

    return pc;
  }

  private handlePeerLeft(peerId: string): void {
    const pc = this.peerConnections[peerId];
    if (pc) {
      pc.close();
      delete this.peerConnections[peerId];
    }

    if (this.remoteStreams[peerId]) {
      delete this.remoteStreams[peerId];
      this.remoteStreamRemovedSubject.next(peerId);
    }
  }

  onRemoteStreamAdded(callback: (peerId: string, stream: MediaStream) => void): void {
    this.remoteStreamAdded$.subscribe(({ peerId, stream }) => callback(peerId, stream));
  }

  onRemoteStreamRemoved(callback: (peerId: string) => void): void {
    this.remoteStreamRemoved$.subscribe(peerId => callback(peerId));
  }

  async leaveSession(): Promise<void> {
    // Close all peer connections
    Object.keys(this.peerConnections).forEach(peerId => {
      this.peerConnections[peerId].close();
      delete this.peerConnections[peerId];
    });

    // Stop local stream
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
      this.localStream = null;
    }

    // Close WebSocket
    if (this.socket$) {
      this.socket$.complete();
    }

    // Clear remote streams
    this.remoteStreams = {};
  }

  async toggleMic(): Promise<void> {
    if (this.localStream) {
      const audioTracks = this.localStream.getAudioTracks();
      if (audioTracks.length > 0) {
        audioTracks[0].enabled = !audioTracks[0].enabled;
      }
    }
  }

  async toggleCamera(): Promise<void> {
    if (this.localStream) {
      const videoTracks = this.localStream.getVideoTracks();
      if (videoTracks.length > 0) {
        videoTracks[0].enabled = !videoTracks[0].enabled;
      }
    }
  }

  async shareScreen(): Promise<void> {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });

      // Replace video track in all peer connections
      const videoTrack = screenStream.getVideoTracks()[0];
      Object.values(this.peerConnections).forEach(pc => {
        const sender = pc.getSenders().find(s => s.track?.kind === 'video');
        if (sender) {
          sender.replaceTrack(videoTrack);
        }
      });

      // Handle when user stops sharing
      videoTrack.onended = () => {
        // Switch back to camera
        if (this.localStream) {
          const cameraTrack = this.localStream.getVideoTracks()[0];
          Object.values(this.peerConnections).forEach(pc => {
            const sender = pc.getSenders().find(s => s.track?.kind === 'video');
            if (sender && cameraTrack) {
              sender.replaceTrack(cameraTrack);
            }
          });
        }
      };
    } catch (error) {
      console.error('Error sharing screen:', error);
    }
  }
}