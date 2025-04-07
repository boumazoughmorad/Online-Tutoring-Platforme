// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { MessageService } from '../../services/message.service';
// import { UserService } from '../../services/user.service';
// import { TutorService } from '../../services/tutor.service';
// import { Message } from '../../models/message.model';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Subscription, interval } from 'rxjs';
// import { switchMap, startWith } from 'rxjs/operators';
// import { AuthService } from '../../services/auth.service';
// import { SocketService } from '../../services/socket.service';

// @Component({
//   selector: 'app-messages',
//   templateUrl: './messages.component.html',
//   styleUrls: ['./messages.component.scss']
// })
// export class MessagesComponent implements OnInit, OnDestroy {
//   messages: Message[] = [];
//   activeConversation: any = null;
//   conversations: any[] = [];
//   messageForm: FormGroup;
//   currentUser: any;
//   isTutor: boolean = false;
//   loading: boolean = true;
//   error: string | null = null;
//   private subscriptions: Subscription = new Subscription();
//   private refreshInterval = interval(30000); // 30 seconds

//   constructor(
//     private messageService: MessageService,
//     private userService: UserService,
//     private tutorService: TutorService,
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private socketService: SocketService
//   ) {
//     this.messageForm = this.fb.group({
//       content: ['', [Validators.required, Validators.maxLength(1000)]]
//     });
//   }

//   ngOnInit(): void {
//     this.currentUser = this.authService.getCurrentUser();
//     this.isTutor = this.authService.isTutor();

//     this.loadConversations();
//     this.setupSocketListeners();

//     // Set up periodic refresh
//     this.subscriptions.add(
//       this.refreshInterval.pipe(
//         startWith(0),
//         switchMap(() => this.activeConversation ? 
//           this.messageService.getMessages(this.activeConversation.id) : 
//           this.messageService.getConversations()
//         )
//       ).subscribe({
//         next: (data) => {
//           if (this.activeConversation) {
//             this.messages = data as Message[];
//           } else {
//             this.conversations = data as any[];
//           }
//         },
//         error: (err) => console.error('Error refreshing messages:', err)
//       })
//     );
//   }

//   loadConversations(): void {
//     this.loading = true;
//     this.subscriptions.add(
//       this.messageService.getConversations().subscribe({
//         next: (conversations) => {
//           this.conversations = conversations;
//           if (conversations.length > 0 && !this.activeConversation) {
//             this.selectConversation(conversations[0]);
//           }
//           this.loading = false;
//         },
//         error: (err) => {
//           this.error = 'Failed to load conversations';
//           this.loading = false;
//           console.error(err);
//         }
//       })
//     );
//   }

//   selectConversation(conversation: any): void {
//     this.activeConversation = conversation;
//     this.loading = true;
//     this.subscriptions.add(
//       this.messageService.getMessages(conversation.id).subscribe({
//         next: (messages) => {
//           this.messages = messages;
//           this.markMessagesAsRead();
//           this.loading = false;
//         },
//         error: (err) => {
//           this.error = 'Failed to load messages';
//           this.loading = false;
//           console.error(err);
//         }
//       })
//     );
//   }

//   sendMessage(): void {
//     if (this.messageForm.invalid || !this.activeConversation) return;

//     const messageContent = this.messageForm.get('content')?.value;
//     const recipientId = this.isTutor ? 
//       this.activeConversation.studentId : 
//       this.activeConversation.tutorId;

//     this.subscriptions.add(
//       this.messageService.sendMessage({
//         conversationId: this.activeConversation.id,
//         recipientId: recipientId,
//         content: messageContent
//       }).subscribe({
//         next: (newMessage) => {
//           this.messages.push(newMessage);
//           this.messageForm.reset();
//           this.scrollToBottom();
//         },
//         error: (err) => {
//           this.error = 'Failed to send message';
//           console.error(err);
//         }
//       })
//     );
//   }

//   markMessagesAsRead(): void {
//     if (this.activeConversation && this.messages.length > 0) {
//       const unreadMessages = this.messages.filter(m => !m.isRead && m.senderId !== this.currentUser.id);
//       if (unreadMessages.length > 0) {
//         this.messageService.markAsRead(this.activeConversation.id, unreadMessages.map(m => m.id)).subscribe();
//       }
//     }
//   }

//   setupSocketListeners(): void {
//     this.socketService.onNewMessage().subscribe((message: Message) => {
//       if (this.activeConversation && message.conversationId === this.activeConversation.id) {
//         this.messages.push(message);
//         this.scrollToBottom();
//       }
//       // Update conversation list with new message preview
//       const convIndex = this.conversations.findIndex(c => c.id === message.conversationId);
//       if (convIndex > -1) {
//         this.conversations[convIndex].lastMessage = message.content;
//         this.conversations[convIndex].updatedAt = new Date();
//         // Move to top
//         this.conversations = [
//           this.conversations[convIndex],
//           ...this.conversations.slice(0, convIndex),
//           ...this.conversations.slice(convIndex + 1)
//         ];
//       }
//     });
//   }

//   scrollToBottom(): void {
//     setTimeout(() => {
//       const messageContainer = document.getElementById('message-container');
//       if (messageContainer) {
//         messageContainer.scrollTop = messageContainer.scrollHeight;
//       }
//     }, 100);
//   }

//   getOtherUser(conversation: any): string {
//     return this.isTutor ? 
//       `${conversation.studentName}` : 
//       `${conversation.tutorName}`;
//   }

//   getAvatar(conversation: any): string {
//     return this.isTutor ? 
//       conversation.studentAvatar || 'assets/images/default-student.png' : 
//       conversation.tutorAvatar || 'assets/images/default-tutor.png';
//   }

//   ngOnDestroy(): void {
//     this.subscriptions.unsubscribe();
//     this.socketService.disconnect();
//   }
// }


import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  time: string;
  sender: 'me' | 'them';
  status?: 'sent' | 'delivered' | 'read';
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: boolean;
  subject?: string;
  status: string;
  messages: Message[];
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  imports:[NgIf,NgFor,CommonModule, FormsModule],
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  newMessage = '';
  activeConversation: Conversation | null = null;

  conversations: Conversation[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      lastMessage: 'I sent you the study materials for our next session',
      lastMessageTime: '10:30 AM',
      unread: true,
      subject: 'Mathematics',
      status: 'Online',
      messages: [
        {
          text: 'Hi there! How can I help you with your math problems today?',
          time: '10:00 AM',
          sender: 'them'
        },
        {
          text: 'Hi Dr. Johnson, I\'m struggling with calculus integrals',
          time: '10:05 AM',
          sender: 'me',
          status: 'read'
        },
        {
          text: 'I sent you the study materials for our next session',
          time: '10:30 AM',
          sender: 'them'
        }
      ]
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      lastMessage: 'Your essay draft looks good, we can discuss improvements',
      lastMessageTime: 'Yesterday',
      unread: false,
      subject: 'English Literature',
      status: 'Offline',
      messages: [
        {
          text: 'Please review my essay draft when you have time',
          time: 'Yesterday',
          sender: 'me',
          status: 'read'
        },
        {
          text: 'Your essay draft looks good, we can discuss improvements',
          time: 'Yesterday',
          sender: 'them'
        }
      ]
    },
    {
      id: 3,
      name: 'Ms. Emily Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      lastMessage: 'Don\'t forget about our chemistry lab tomorrow',
      lastMessageTime: 'Monday',
      unread: false,
      subject: 'Chemistry',
      status: 'Online',
      messages: [
        {
          text: 'Here are the lab results from our last experiment',
          time: 'Monday',
          sender: 'them'
        },
        {
          text: 'Thanks! I\'ll review them before our next session',
          time: 'Monday',
          sender: 'me',
          status: 'read'
        },
        {
          text: 'Don\'t forget about our chemistry lab tomorrow',
          time: 'Monday',
          sender: 'them'
        }
      ]
    }
  ];

  setActiveConversation(conversation: Conversation): void {
    this.activeConversation = conversation;
    // Mark as read when opening
    conversation.unread = false;
  }

  sendMessage(): void {
    if (this.newMessage.trim() && this.activeConversation) {
      const newMsg: Message = {
        text: this.newMessage,
        time: this.getCurrentTime(),
        sender: 'me',
        status: 'sent'
      };

      this.activeConversation.messages.push(newMsg);
      this.activeConversation.lastMessage = this.newMessage;
      this.activeConversation.lastMessageTime = 'Just now';
      this.newMessage = '';

      // Simulate message delivery
      setTimeout(() => {
        newMsg.status = 'delivered';
      }, 1000);

      // Simulate message read
      setTimeout(() => {
        newMsg.status = 'read';
      }, 3000);
    }
  }

  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}