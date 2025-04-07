import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tutor } from '../model/tutor.model';

@Injectable({
  providedIn: 'root',
})
export class TutorService {
  private selectedTutorSubject: BehaviorSubject<Tutor | null> = new BehaviorSubject<Tutor | null>(null);

  constructor() {}

  get selectedTutor$(): Observable<Tutor | null> {
    return this.selectedTutorSubject.asObservable();
  }

  playVideo(tutor: Tutor): void {
    this.selectedTutorSubject.next(tutor); 
  }

  closeVideo(): void {
    this.selectedTutorSubject.next(null); 
  }
}
