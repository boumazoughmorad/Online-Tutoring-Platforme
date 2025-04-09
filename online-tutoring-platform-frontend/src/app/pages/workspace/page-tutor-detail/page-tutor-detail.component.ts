import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { NgFor, NgIf } from '@angular/common';
import { IconComponent, TIconName } from '../../../shared/components/icon/icon.component';

interface Tutor {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  specialization: string;
  bio: string;
  trialPrice: number;
  videoId: string;
  badges: string[];
  qualifications: {
    icon: TIconName;
    title: string;
    description: string;
    year?: string;
  }[];
  reviewList: {
    student: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  pricing: {
    lessons: number;
    duration: string;
    price: number;
    total: number;
    popular: boolean;
  }[];
}

@Component({
  selector: 'app-page-tutor-detail',
  templateUrl: './page-tutor-detail.component.html',
  imports: [IconComponent,NgIf,NgFor]
})
export class TutorDetailComponent implements OnInit {
  tutor: Tutor = {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'assets/tutors/sarah.jpg',
    rating: 4.9,
    reviews: 128,
    specialization: 'Business English, IELTS Preparation',
    bio: 'Certified TEFL instructor with 8 years experience helping professionals improve their business communication skills. Specialized in interview preparation and presentation coaching. My teaching approach focuses on practical, real-world applications of English in professional settings.',
    trialPrice: 15,
    videoId: 'dQw4w9WgXcQ',
    badges: ['TEFL Certified', '10+ years experience', 'IELTS Expert'],
    qualifications: [
      {
        icon: 'certificate',
        title: 'TEFL Certification',
        description: 'International TEFL Academy',
        year: '2015'
      },
      {
        icon: 'graduation-cap',
        title: 'MA in Linguistics',
        description: 'University of London',
        year: '2012'
      },
      {
        icon: 'briefcase',
        title: 'Business English Specialist',
        description: 'Corporate training experience with Fortune 500 companies'
      }
    ],
    reviewList: [
      {
        student: 'Michael K.',
        rating: 5,
        comment: 'Sarah helped me prepare for my IELTS exam and I scored 8.5! Her teaching methods are very effective and she provides excellent feedback.',
        date: '2 weeks ago'
      },
      {
        student: 'Anna L.',
        rating: 5,
        comment: 'Perfect tutor for business English. My presentations have improved dramatically after just 10 lessons.',
        date: '1 month ago'
      }
    ],
    pricing: [
      {
        lessons: 1,
        duration: '60 min',
        price: 28,
        total: 28,
        popular: false
      },
      {
        lessons: 5,
        duration: '60 min',
        price: 25,
        total: 125,
        popular: true
      },
      {
        lessons: 10,
        duration: '60 min',
        price: 22,
        total: 220,
        popular: false
      }
    ]
  };

  calendarDays: any[] = [];
  showVideo = false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.generateCalendarDays();
    // In a real app, you would fetch tutor data based on route param:
    // this.route.params.subscribe(params => {
    //   this.tutorService.getTutor(params['id']).subscribe(tutor => {
    //     this.tutor = tutor;
    //   });
    // });
  }

  generateCalendarDays() {
    // Simplified calendar generation - in a real app, use a date library
    const daysInMonth = 31;
    const startDay = 3; // Wednesday
    for (let i = 0; i < startDay; i++) {
      this.calendarDays.push({ day: '', available: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      this.calendarDays.push({ 
        day: i, 
        available: i % 3 !== 0 // Just for demo - every 3rd day is unavailable
      });
    }
  }

  playVideo() {
    this.showVideo = true;
  }

  closeVideo() {
    this.showVideo = false;
  }

  getSafeEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // Add these properties to your component class
isSaved = false;
showMessageModal = false;

// Add these methods
toggleSaveToList() {
  this.isSaved = !this.isSaved;
  // In a real app, you would call a service here to update the user's saved list
  const message = this.isSaved ? 'Added to your list' : 'Removed from your list';
  // Show a toast notification
  this.showToast(message);
}

openMessageModal() {
  this.showMessageModal = true;
}

closeMessageModal() {
  this.showMessageModal = false;
}

showToast(message: string) {
  // Implement your toast notification logic here
  console.log(message); // Replace with actual toast implementation
}
}