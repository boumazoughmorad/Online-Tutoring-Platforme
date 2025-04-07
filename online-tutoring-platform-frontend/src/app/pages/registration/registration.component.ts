import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgIf } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports:[NgIf,ReactiveFormsModule]
})
export class RegisterComponent {
  registerForm: FormGroup;
  userType: 'student' | 'tutor' = 'student';
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
   
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      userType: ['student', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  setUserType(type: 'student' | 'tutor') {
    this.userType = type;
    this.registerForm.patchValue({ userType: type });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.markFormGroupTouched(this.registerForm);
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { name, email, password, userType } = this.registerForm.value;

    // this.authService.register(name, email, password, userType).subscribe({
    //   next: () => {
    //     this.router.navigate(['/verify-email'], { 
    //       queryParams: { email } 
    //     });
    //   },
    //   error: (err) => {
    //     this.errorMessage = err.message || 'Registration failed. Please try again.';
    //     this.isLoading = false;
    //   }
    // });
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}