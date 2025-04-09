import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Stat {
  name: string;
  value: string;
  icon: string;
  change?: {
    type: 'increase' | 'decrease';
    value: string;
  };
}

interface Tutor {
  name: string;
  avatar: string;
}

interface Course {
  id: number;
  title: string;
  tutor: Tutor;
  category: string;
  image: string;
  progress: number;
  nextSession: string;
  completedDate?: string;
}

interface Tab {
  name: string;
  route: string;
  count?: number;
}

@Component({
  selector: 'app-page-my-courses',
  templateUrl: './page-my-courses.component.html',
  imports:[NgIf,NgFor,RouterLink,DatePipe]
})
export class MyCoursesComponent {
  stats: Stat[] = [
    {
      name: 'Active Courses',
      value: '5',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      change: {
        type: 'increase',
        value: '12%'
      }
    },
    {
      name: 'Hours Learned',
      value: '42',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      change: {
        type: 'increase',
        value: '19%'
      }
    },
    {
      name: 'Upcoming Sessions',
      value: '3',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      name: 'Completed Courses',
      value: '7',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      change: {
        type: 'increase',
        value: '8%'
      }
    }
  ];

  tabs: Tab[] = [
    { name: 'All', route: '/courses/all', count: 12 },
    { name: 'Active', route: '/courses/active', count: 5 },
    { name: 'Completed', route: '/courses/completed', count: 7 },
    { name: 'Saved', route: '/courses/saved' }
  ];

  activeCourses: Course[] = [
    {
      id: 1,
      title: 'Advanced Calculus',
      tutor: { name: 'Dr. Sarah Johnson', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      category: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      progress: 65,
      nextSession: 'Tomorrow, 2:00 PM'
    },
    {
      id: 2,
      title: 'Organic Chemistry',
      tutor: { name: 'Prof. Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      category: 'Science',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      progress: 42,
      nextSession: 'Friday, 10:00 AM'
    },
    {
      id: 3,
      title: 'Creative Writing',
      tutor: { name: 'Ms. Emily Rodriguez', avatar: 'https://randomuser.me/api/portraits/women/63.jpg' },
      category: 'Literature',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      progress: 78,
      nextSession: 'Wednesday, 4:30 PM'
    }
  ];

  completedCourses: Course[] = [
    {
      id: 4,
      title: 'Introduction to Python',
      tutor: { name: 'Dr. James Wilson', avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      progress: 100,
      completedDate: '2023-05-15',
      nextSession:""
    },
    {
      id: 5,
      title: 'World History',
      tutor: { name: 'Prof. Lisa Brown', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
      category: 'History',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      progress: 100,
      completedDate: '2023-03-22',
      nextSession:""
    }
  ];

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}