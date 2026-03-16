import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html'
})
export class Contact {
constructor() {}

  ngOnInit() {
    // Handle form submission with Formspree
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const successMsg = document.getElementById('success-message');
    const errorMsg = document.getElementById('error-message');
    const spinner = document.getElementById('loading-spinner');
    const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Hide any previous messages
        if (successMsg) successMsg.classList.add('hidden');
        if (errorMsg) errorMsg.classList.add('hidden');
        
        // Show spinner, disable button
        if (spinner) spinner.classList.remove('hidden');
        if (submitBtn) submitBtn.disabled = true;

        try {
          const formData = new FormData(form);
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            // Success!
            if (successMsg) successMsg.classList.remove('hidden');
            form.reset(); // Clear the form
          } else {
            // Error from Formspree
            if (errorMsg) errorMsg.classList.remove('hidden');
          }
        } catch (error) {
          // Network error
          if (errorMsg) errorMsg.classList.remove('hidden');
        } finally {
          // Hide spinner, enable button
          if (spinner) spinner.classList.add('hidden');
          if (submitBtn) submitBtn.disabled = false;
        }
      });
    }
  }

}