import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginTutor(email: string, password: string) {
    return this.http.post('/api/tutors/login', { email, password }).pipe(
      // tap(response => {
      //   localStorage.setItem('authToken', response.token);
      //   localStorage.setItem('userType', 'tutor');
      // })
    );
  }

  loginUser(email: string, password: string) {
    return this.http.post('/api/users/login', { email, password }).pipe(
      // tap(response => {
      //   localStorage.setItem('authToken', response.token);
      //   localStorage.setItem('userType', 'student');
      // })
    );
  }
}
