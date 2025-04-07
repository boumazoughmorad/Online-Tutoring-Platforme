import { NgFor, NgIf } from '@angular/common';
import {Component, EventEmitter, Output} from '@angular/core';
import { IconComponent, TIconName } from '../../../icon/icon.component';


@Component({
  selector: 'app-notification-bell',
  imports: [NgIf, IconComponent,NgFor],
  templateUrl: './notification-bell.component.html',
  styleUrl: './notification-bell.component.css'
})
export class NotificationBellComponent {
  
  hasUnread = true; // Set based on actual notifications
  notifications:{id:number,message:string,icon:TIconName,title:string,read:boolean,time:string }[] = [
    {
      id: 1,
      title: 'New message from Tutor',
      message: 'Your tutor sent you feedback on your assignment',
      time: '2 hours ago',
      read: false,
      icon: 'message-square'
    },
    {
      id: 2,
      title: 'Upcoming session',
      message: 'Math session with Prof. Smith starts in 30 minutes',
      time: '5 hours ago',
      read: true,
      icon: 'calendar'
    }
  ];


  notificationOpen: boolean=false;

  toggleNotifications() {
    this.notificationOpen = !this.notificationOpen
  }

  markAsRead(id: number) {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) {
      notification.read = true;
    }
    this.hasUnread = this.notifications.some(n => !n.read);
  }
}
