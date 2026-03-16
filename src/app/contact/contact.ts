import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  attachment?: File;
}

interface SocialLink {
  name: string;
  handle: string;
  icon: string;
  url: string;
}

interface OfficeHour {
  day: string;
  hours: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html'
})
export class Contact {
 contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  // Formspree endpoint
  private formspreeUrl = 'https://formspree.io/f/xgonnndw';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      'first-name': ['', Validators.required],
      'last-name': ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';

    try {
      // Send to Formspree
      const response = await firstValueFrom(
        this.http.post(this.formspreeUrl, this.contactForm.value)
      );
      
      // Handle success
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => this.submitSuccess = false, 5000);
      
    } catch (error: any) {
      // Handle error
      this.isSubmitting = false;
      this.submitError = true;
      
      // Set appropriate error message
      if (error.status === 0) {
        this.errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.status === 429) {
        this.errorMessage = 'Too many requests. Please try again later.';
      } else {
        this.errorMessage = 'Failed to send message. Please try again or email me directly.';
      }
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => this.submitError = false, 5000);
    }
  }

  // Helper method to check if a field is invalid and touched
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  // Get validation error message for a field
  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field) return '';

    if (field.hasError('required')) {
      return `${this.formatFieldName(fieldName)} is required`;
    }
    if (field.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (field.hasError('minlength')) {
      return `Message must be at least 10 characters long`;
    }
    return '';
  }

  // Helper to format field names for error messages
  private formatFieldName(fieldName: string): string {
    return fieldName.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}