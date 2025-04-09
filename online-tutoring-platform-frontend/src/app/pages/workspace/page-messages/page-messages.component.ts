
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
  selector: 'app-page-messages',
  templateUrl: './page-messages.component.html',
  imports:[NgIf,NgFor,CommonModule, FormsModule],
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