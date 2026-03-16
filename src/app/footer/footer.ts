import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}