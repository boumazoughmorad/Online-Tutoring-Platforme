import { CommonModule, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from './service/classroom.service';
import { WebRTCService } from './service/webrtc.service';

@Component({
  selector: 'app-online-course',
  imports: [NgFor,CommonModule, FormsModule, ],
  templateUrl: './online-course.component.html',
  styleUrl: './online-course.component.css'
})
export class OnlineCourseComponent implements OnInit, OnDestroy {
  sessionId: string;
  isTutor: boolean = false;
  participants: any[] = [];
  localStream: MediaStream | null = null;
  remoteStreams: { [key: string]: MediaStream } = {};

  constructor(
    private route: ActivatedRoute,
    private classroomService: ClassroomService,
    private webRTCService: WebRTCService
  ) {
    this.sessionId = this.route.snapshot.paramMap.get('id') || '';
  }

  async ngOnInit() {
    // Check user role (tutor/student)
    this.isTutor = await this.classroomService.checkUserRole(this.sessionId);
    
    // Join the classroom session
    await this.classroomService.joinSession(this.sessionId, this.isTutor);
    
    // Initialize WebRTC
    await this.initWebRTC();
    
    // Load whiteboard and other tools if tutor
    if (this.isTutor) {
      this.initWhiteboard();
    }
  }

  async initWebRTC() {
    try {
      // Get local media stream
      this.localStream = await this.webRTCService.getUserMedia({
        video: true,
        audio: true
      });
      
      // Initialize peer connections
      await this.webRTCService.initPeerConnections(this.sessionId, this.isTutor);
      
      // Listen for remote streams
      this.webRTCService.onRemoteStreamAdded((peerId, stream) => {
        this.remoteStreams[peerId] = stream;
      });
      
      this.webRTCService.onRemoteStreamRemoved((peerId) => {
        delete this.remoteStreams[peerId];
      });
    } catch (error) {
      console.error('Error initializing WebRTC:', error);
    }
  }

  initWhiteboard() {
    // Initialize collaborative whiteboard
  }

  async ngOnDestroy() {
    // Clean up
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
    }
    await this.webRTCService.leaveSession();
    await this.classroomService.leaveSession(this.sessionId);
  }

  toggleMic() {
    // Toggle microphone
  }

  toggleCamera() {
    // Toggle camera
  }

  shareScreen() {
    // Handle screen sharing
  }

  endSession() {
    // End session (for tutor)
  }

  // Add these methods to your existing ClassroomComponent class

getRemotePeerIds(): string[] {
  return Object.keys(this.remoteStreams);
}

getParticipantName(peerId: string): string {
  // You'll need to implement logic to map peerId to participant name
  // This could come from your ClassroomService or WebRTCService
  
  // Temporary implementation - replace with your actual logic
  if (this.participants && this.participants.length > 0) {
    const participant = this.participants.find(p => p.id === peerId);
    return participant ? participant.name : `Participant ${peerId.substring(0, 4)}`;
  }
  return `Participant ${peerId.substring(0, 4)}`;
}
}

