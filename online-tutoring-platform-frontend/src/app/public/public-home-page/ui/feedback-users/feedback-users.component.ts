import { Component, OnInit } from '@angular/core';
import { feedback } from './model/feedBack.model';
import { feedbackList } from './model/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feedback-users',
  imports: [],
  templateUrl: './feedback-users.component.html',
  styleUrl: './feedback-users.component.css'
})
export class FeedbackUsersComponent implements OnInit{

  feedback : feedback[] = []
  selectedFeedback !: feedback 
  currentIndex = 0;
  ngOnInit(): void {
   this.feedback = feedbackList
   this.selectedFeedback = this.feedback[0]
  }

  selectFeedback(item: feedback): void {
    this.selectedFeedback = item;
    this.currentIndex = this.feedback.findIndex(f => f.id === item.id);
  }

  nextFeedback(): void {
    this.currentIndex = (this.currentIndex + 1) % this.feedback.length;
    this.selectedFeedback = this.feedback[this.currentIndex];
  }

  prevFeedback(): void {
    this.currentIndex = (this.currentIndex - 1 + this.feedback.length) % this.feedback.length;
    this.selectedFeedback = this.feedback[this.currentIndex];
  }

}
