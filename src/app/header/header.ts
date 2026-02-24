import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
isDark = true;
  mobileMenuOpen = false;

  navItems = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Projects', route: '/projects' },
    { label: 'Resume', route: '/resume' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(private router: Router) {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
      this.applyTheme();
    }
  }

  // Helper method for the animated border version
  isActive(route: string): boolean {
    if (route === '/') {
      return this.router.url === '/';
    }
    return this.router.url.startsWith(route);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.applyTheme();
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this.isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:resize')
  onResize(): void {
    // Close mobile menu on window resize (if switching to desktop)
    if (window.innerWidth >= 768 && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    // Close mobile menu when clicking outside
    const target = event.target as HTMLElement;
    const isMenuButton = target.closest('button[aria-label="Toggle menu"]');
    const isMobileMenu = target.closest('.md\\:hidden.fixed.top-\\[70px\\]');
    
    if (this.mobileMenuOpen && !isMenuButton && !isMobileMenu) {
      this.closeMobileMenu();
    }
  }
}
