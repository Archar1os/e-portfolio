import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 
  // Mouse position for parallax
  private mouseX: number = 0;
  private mouseY: number = 0;
  private rafId: number | null = null;

  // Intersection Observer for fade-ins
  private observer: IntersectionObserver | null = null;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Initialize any data
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initParallax();
      this.initScrollReveal();
      this.initCursorEffects();
    }
  }

  ngOnDestroy(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('mousemove', this.handleMouseMove);
    }
  }

  // Navigation
  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  // ========== PARALLAX EFFECTS ==========
  private initParallax(): void {
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    
    const animateParallax = () => {
      const elements = document.querySelectorAll('[data-parallax]');
      elements.forEach((el: Element) => {
        const speed = el.getAttribute('data-parallax') || '0.05';
        const htmlEl = el as HTMLElement;
        const x = (window.innerWidth / 2 - this.mouseX) * parseFloat(speed);
        const y = (window.innerHeight / 2 - this.mouseY) * parseFloat(speed);
        htmlEl.style.transform = `translate(${x}px, ${y}px)`;
      });
      this.rafId = requestAnimationFrame(animateParallax);
    };
    
    animateParallax();
  }

  private handleMouseMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  // ========== SCROLL REVEAL ==========
  private initScrollReveal(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => {
      this.observer?.observe(el);
    });
  }

  // ========== CUSTOM CURSOR ==========
  private initCursorEffects(): void {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.id = 'custom-cursor-follower';
    document.body.appendChild(cursorFollower);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursorFollower.style.left = cursorX + 'px';
      cursorFollower.style.top = cursorY + 'px';
      
      requestAnimationFrame(animate);
    };
    
    animate();

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .group');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-follower-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-follower-hover');
      });
    });
  }

  // ========== SCROLL PROGRESS ==========
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  }

  // ========== UTILITIES ==========
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
