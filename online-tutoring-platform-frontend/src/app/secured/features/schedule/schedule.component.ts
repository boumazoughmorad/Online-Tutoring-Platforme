import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Day {
  name: string;
  date: string;
  isToday: boolean;
}

interface Tutor {
  name: string;
  avatar: string;
}

interface Session {
  id: number;
  title: string;
  tutor: Tutor;
  course: string;
  type: 'tutoring' | 'group';
  date: string;
  time: string;
  dateTime: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  imports:[NgIf,NgFor],
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  days: Day[] = [
    { name: 'Mon', date: '12', isToday: false },
    { name: 'Tue', date: '13', isToday: false },
    { name: 'Wed', date: '14', isToday: true },
    { name: 'Thu', date: '15', isToday: false },
    { name: 'Fri', date: '16', isToday: false },
    { name: 'Sat', date: '17', isToday: false },
    { name: 'Sun', date: '18', isToday: false }
  ];

  allSessions: Session[] = [
    {
      id: 1,
      title: 'Calculus Review',
      tutor: { name: 'Dr. Sarah Johnson', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      course: 'Advanced Mathematics',
      type: 'tutoring',
      date: 'Jun 14',
      time: '10:00 AM - 11:30 AM',
      dateTime: '2023-06-14T10:00'
    },
    {
      id: 2,
      title: 'Organic Chemistry Lab',
      tutor: { name: 'Prof. Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      course: 'Chemistry Fundamentals',
      type: 'group',
      date: 'Jun 14',
      time: '2:00 PM - 3:30 PM',
      dateTime: '2023-06-14T14:00'
    },
    {
      id: 3,
      title: 'Essay Writing Workshop',
      tutor: { name: 'Ms. Emily Rodriguez', avatar: 'https://randomuser.me/api/portraits/women/63.jpg' },
      course: 'English Composition',
      type: 'group',
      date: 'Jun 16',
      time: '4:00 PM - 5:30 PM',
      dateTime: '2023-06-16T16:00'
    }
  ];

  upcomingSessions: Session[] = [
    ...this.allSessions,
    {
      id: 4,
      title: 'Python Programming',
      tutor: { name: 'Dr. James Wilson', avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
      course: 'Computer Science',
      type: 'tutoring',
      date: 'Jun 20',
      time: '9:00 AM - 10:30 AM',
      dateTime: '2023-06-20T09:00'
    }
  ];

  pastSessions: Session[] = [
    {
      id: 5,
      title: 'World History Discussion',
      tutor: { name: 'Prof. Lisa Brown', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
      course: 'Modern History',
      type: 'group',
      date: 'Jun 7, 2023',
      time: '11:00 AM - 12:30 PM',
      dateTime: '2023-06-07T11:00'
    },
    {
      id: 6,
      title: 'Linear Algebra',
      tutor: { name: 'Dr. Sarah Johnson', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      course: 'Advanced Mathematics',
      type: 'tutoring',
      date: 'Jun 5, 2023',
      time: '3:00 PM - 4:30 PM',
      dateTime: '2023-06-05T15:00'
    }
  ];

  getSessionsForDay(day: string): Session[] {
    return this.allSessions.filter(session => session.date.includes(day));
  }
}