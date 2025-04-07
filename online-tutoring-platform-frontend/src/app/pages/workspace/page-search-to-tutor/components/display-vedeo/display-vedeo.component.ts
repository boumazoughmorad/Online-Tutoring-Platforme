import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tutor } from '../../../../../domains/tutor/model/tutor.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TutorService } from '../../../../../domains/tutor/service/tutor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-vedeo',
  imports: [NgIf],
  templateUrl: './display-vedeo.component.html',
 
})
export class DisplayVedeoComponent implements OnInit, OnDestroy {
  selectedTutor: Tutor | null = null; 
  private tutorSubscription: Subscription = new Subscription();

  constructor(
    private sanitizer: DomSanitizer,
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {
 
    this.tutorSubscription = this.tutorService.selectedTutor$.subscribe(
      (tutor) => {
        this.selectedTutor = tutor;
      }
    );
  }

  ngOnDestroy(): void {
  
    this.tutorSubscription.unsubscribe();
  }

  closeVideo(): void {
    this.tutorService.closeVideo(); 
  }

  getSafeEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getVideoId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  }
}
