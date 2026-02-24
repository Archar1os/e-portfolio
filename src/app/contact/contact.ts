import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false
  };
  
  formSubmitted = false;

  onSubmit() {
    if (this.formData.agree) {
      // Handle form submission here
      console.log('Form submitted:', this.formData);
      this.formSubmitted = true;
    }
  }
}
