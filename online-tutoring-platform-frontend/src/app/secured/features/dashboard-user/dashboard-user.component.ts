import { Component } from '@angular/core';

import { CommonModule, NgIf } from '@angular/common';
import { CalendarEvent, WeeklyCalendarComponent } from "./ui/weekly-calendar/weekly-calendar.component";
import { ProgressChartComponent } from "./ui/progress-chart/progress-chart.component";
import { UserType } from './model/dashboard-user.model';
import { DashboardUserHeaderComponent } from "./ui/dashboard-user-header/dashboard-user-header.component";
import { IconComponent, TIconName } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-dashboard-user',
  imports: [NgIf, IconComponent, CommonModule, WeeklyCalendarComponent, ProgressChartComponent, DashboardUserHeaderComponent],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent {
  userType: UserType = 'student';
  
  // Sample data - replace with real data from your service
  upcomingSessions = 2;
  hoursThisWeek = 8.5;
  pendingActions = 3;

// Sample data for the components
scheduleEvents : CalendarEvent[]= [
  { 
    title: 'Math Lesson', 
    date: new Date(2025, 3, 6, 14, 0), // June 12, 2023 at 2:00 PM
    type: 'session'
  },
  { 
    title: 'Assignment Due', 
    date: new Date(2025, 3, 7, 12, 59), // June 14, 2023 at 11:59 PM
    type: 'assignment'
  },
  { 
    title: 'Assignment Due', 
    date: new Date(2025, 3, 8, 12, 59), // June 14, 2023 at 11:59 PM
    type: 'exam'
  }
];

progressData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  datasets: [
    {
      label: 'Course Completion',
      data: [20, 35, 50, 65, 85],
      backgroundColor: '#3B82F6'
    },
    {
      label: 'Assignments Submitted',
      data: [10, 25, 45, 70, 90],
      backgroundColor: '#10B981'
    }
  ]
};



  recentActivities:{type:string,icon:TIconName,title:string,description:string,time:string }[] = [
    {
      type: 'course',
      icon: 'book',
      title: 'New course added',
      description: 'Advanced Calculus now available',
      time: '2 hours ago'
    },
    {
      type: 'session',
      icon: 'video',
      title: 'Session completed',
      description: 'Algebra Review with Prof. Smith',
      time: 'Yesterday'
    }
  ];

  resources :{type:string,icon:TIconName,title:string }[]= [
    { type: 'pdf', icon: 'file-text', title: 'Study Guide.pdf' },
    { type: 'video', icon: 'film', title: 'Lecture Recording' },
    { type: 'link', icon: 'link', title: 'Reference Website' }
  ];

  toggleUserType() {
    this.userType = this.userType === 'student' ? 'tutor' : 'student';
    // In real app, you would fetch user-specific data here
  }
}
