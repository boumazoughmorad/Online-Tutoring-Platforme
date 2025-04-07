import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFormComponent } from '../../../../../shared/components/input-form/input-form.component';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact-form',
  imports: [NgIf,ReactiveFormsModule,InputFormComponent,IconComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]],
      contactMethod: ['email', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isSubmitted = true;
      this.isLoading = false;
      this.contactForm.reset();
      this.contactForm.get('contactMethod')?.setValue('email');
    }, 1500);
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
}
