import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  
  // Form state
  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  };

  formSubmitted: boolean = false;
  copiedField: string | null = null;

  // Subject options for dropdown
  subjectOptions: string[] = [
    'Project Inquiry',
    'Job Opportunity',
    'Collaboration',
    'Freelance Work',
    'General Question',
    'Just Saying Hello'
  ];

  // Social links data
  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      handle: '@archar1os',
      icon: '🐙',
      url: 'https://github.com/archar1os'
    },
    {
      name: 'LinkedIn',
      handle: 'smith-dainielle-romero',
      icon: '💼',
      url: 'https://linkedin.com/in/smith-dainielle-romero-03242a328/'
    },
    {
      name: 'Twitter',
      handle: '@archarios',
      icon: '🐦',
      url: 'https://twitter.com'
    },
    {
      name: 'Instagram',
      handle: '@archarios.studio',
      icon: '📸',
      url: 'https://instagram.com'
    }
  ];

  // Office hours
  officeHours: OfficeHour[] = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  // FAQs
  faqs: FAQ[] = [
    {
      question: 'What is your typical response time?',
      answer: 'I usually respond within 24-48 hours during business days. For urgent inquiries, please mention it in your message subject.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients worldwide. Time zone differences are managed with flexible scheduling.'
    },
    {
      question: 'What information should I include in my inquiry?',
      answer: 'Include your project scope, timeline, budget range, and any specific requirements. The more details, the better!'
    },
    {
      question: 'Do you offer discovery calls?',
      answer: 'Yes, I offer free 30-minute discovery calls to discuss your project and see if we\'re a good fit.'
    }
  ];

  constructor(private router: Router) {}

  // Navigation
  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Form validation
  isFormValid(): boolean {
    return !!(this.formData.name && 
              this.formData.email && 
              this.formData.subject && 
              this.formData.message && 
              this.formData.consent);
  }

  // Handle file selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      this.formData.attachment = file;
    }
  }

  // Submit form
  submitForm(): void {
    if (!this.isFormValid()) {
      return;
    }

    // Here you would typically send to a backend service
    console.log('Form submitted:', this.formData);
    
    // Show success message
    this.formSubmitted = true;
    
    // Optional: send to email service
    // this.sendEmail(this.formData);
  }

  // Reset form
  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
      consent: false
    };
    this.formSubmitted = false;
  }

  // Copy to clipboard
  copyToClipboard(text: string, field: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedField = field;
      setTimeout(() => {
        this.copiedField = null;
      }, 2000);
    });
  }

  // Open Google Maps
  openMaps(): void {
    window.open('https://maps.google.com/?q=Pampanga,Philippines', '_blank');
  }

  // Send email (placeholder for actual email service)
  private sendEmail(formData: FormData): void {
    // Integrate with email service like EmailJS, SendGrid, etc.
    // Example: this.emailService.send(formData).subscribe(...)
  }
}