import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import { InputFormComponent } from '../../shared/components/input-form/input-form.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-login',
  imports: [IconComponent,ReactiveFormsModule,NgIf,InputFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  isTutorLogin = true; // Default to tutor login

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  toggleLoginType() {
    this.isTutorLogin = !this.isTutorLogin;
    this.errorMessage = ''; // Clear error when switching
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      const { email, password, rememberMe } = this.loginForm.value;

      if (this.isTutorLogin) {
        // await this.authService.loginTutor(email, password);
        this.router.navigate(['/tutor/dashboard']);
      } else {
        // await this.authService.loginUser(email, password);
        this.router.navigate(['/student/dashboard']);
      }

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      }
    } catch (error) {
      this.errorMessage = this.isTutorLogin
        ? 'Identifiants tuteur incorrects'
        : 'Identifiants utilisateur incorrects';
    } finally {
      this.isLoading = false;
    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
