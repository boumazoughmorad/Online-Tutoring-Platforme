import { Component, input, InputSignal, OnDestroy, OnInit } from '@angular/core';
import { Tutor } from '../../model/tutor.model';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { TutorService } from '../../service/tutor.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-card-tutor',
  imports: [IconComponent,NgIf],
  templateUrl: './card-tutor.component.html',

})
export class CardTutorComponent implements OnInit,OnDestroy{

  private tutorSubscription: Subscription = new Subscription();

  constructor(
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {
 
    this.tutorSubscription = this.tutorService.selectedTutor$.subscribe(
      (tutor) => {
        
      }
    );
  }

  ngOnDestroy(): void {
  
    this.tutorSubscription.unsubscribe();
  }

  closeVideo(): void {
    this.tutorService.closeVideo(); 
  }
  playVideo(tutor: Tutor) {
    
    this.tutorService.playVideo(tutor)
  }

  tutor = input.required<Tutor>()
}
