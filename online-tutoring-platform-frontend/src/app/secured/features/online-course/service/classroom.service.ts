// classroom.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private apiUrl = 'https://your-spring-boot-api.com/api/classroom';
  private currentSessionSubject = new BehaviorSubject<any>(null);
  currentSession$ = this.currentSessionSubject.asObservable();

  constructor(private http: HttpClient) {}

  createSession(tutorId: string, topic: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/session`, { tutorId, topic }).pipe(
      tap(session => this.currentSessionSubject.next(session))
    );
  }

  getSessionDetails(sessionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/session/${sessionId}`);
  }

  async joinSession(sessionId: string, isTutor: boolean): Promise<any> {
    const user = this.getCurrentUser();
    const response = await this.http.post(`${this.apiUrl}/session/${sessionId}/join`, {
      userId: user.id,
      name: user.name,
      isTutor
    }).toPromise();
    
    this.currentSessionSubject.next(response);
    return response;
  }

  leaveSession(sessionId: string): Observable<any> {
    const user = this.getCurrentUser();
    return this.http.post(`${this.apiUrl}/session/${sessionId}/leave`, {
      userId: user.id
    }).pipe(
      tap(() => this.currentSessionSubject.next(null))
    );
  }

  checkUserRole(sessionId: string): Promise<boolean> {
    const user = this.getCurrentUser();
    if (!user || !user.id) {
      return Promise.resolve(false); // ou Promise.reject() selon ton use case
    }
  
    return this.http
      .get<boolean>(`${this.apiUrl}/session/${sessionId}/role/${user.id}`)
      .toPromise()
      .then(result => result ?? false); // assure que le résultat est boolean
  }
  
  getIceServers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ice-servers`);
  }

  private getCurrentUser() {
    // Implement your user retrieval logic (e.g., from auth service)
    return { id: 'user123', name: 'John Doe' };
  }
}