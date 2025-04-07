import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, TIconName } from '../../../../../shared/components/icon/icon.component';

export interface CalendarEvent {
  title: string;
  date: Date;
  type: 'session' | 'assignment' | 'exam';
  color?: string;
}

@Component({
  selector: 'app-weekly-calendar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css']
})
export class WeeklyCalendarComponent {
  @Input() events: CalendarEvent[] = [];

  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  hours = Array.from({length: 12}, (_, i) => i + 8); // 8AM to 7PM

  currentDate = new Date();
  weekStart!: Date;
  weekDays: Date[] = [];

  constructor() {
    this.calculateWeek();
  }

  ngOnChanges() {
    this.calculateWeek();
  }

  calculateWeek() {
    // Get start of week (Sunday)
    const day = this.currentDate.getDay();
    const diff = this.currentDate.getDate() - day;
    this.weekStart = new Date(this.currentDate.setDate(diff));

    this.weekDays = Array.from({length: 7}, (_, i) => {
      const date = new Date(this.weekStart);
      date.setDate(date.getDate() + i);
      return date;
    });
  }
// Add these methods to your weekly-calendar.component.ts

isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() && 
         date.getMonth() === today.getMonth() && 
         date.getFullYear() === today.getFullYear();
}

isPast(day: Date, hour: number): boolean {
  const now = new Date();
  const slotTime = new Date(day);
  slotTime.setHours(hour);
  return slotTime < now;
}

getEventIcon(type: 'session' | 'assignment' | 'exam'): TIconName {
  return {
    'session': 'video',
    'assignment': 'file-text',
    'exam': 'alert-circle'
  }[type]  as TIconName;
}

onEventClick(event: CalendarEvent) {
  // Handle event click (emit to parent or show details)
  console.log('Event clicked:', event);
}

getEventColor(event: CalendarEvent) {
  return {
    'session': 'bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100',
    'assignment': 'bg-purple-50 text-purple-800 border border-purple-100 hover:bg-purple-100',
    'exam': 'bg-red-50 text-red-800 border border-red-100 hover:bg-red-100'
  }[event.type];
}
  getEventsForDayAndHour(day: Date, hour: number) {
    return this.events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day.getDate() &&
        eventDate.getMonth() === day.getMonth() &&
        eventDate.getFullYear() === day.getFullYear() &&
        eventDate.getHours() === hour
      );
    });
  }

  // getEventColor(event: CalendarEvent) {
  //   return event.color ||
  //     (event.type === 'session' ? 'bg-blue-100 text-blue-800' :
  //       event.type === 'assignment' ? 'bg-purple-100 text-purple-800' :
  //         'bg-red-100 text-red-800');
  // }

  prevWeek() {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 7));
    this.calculateWeek();
  }

  nextWeek() {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 7));
    this.calculateWeek();
  }
}
