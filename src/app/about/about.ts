import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [CommonModule, ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  
  // Evolution Timeline Data
  evolutionMoments = [
    {
      year: '2023',
      title: 'The First Step',
      description: 'Enrolled at Holy Angel University. Wrote first line of HTML. It felt like magic.',
      details: ['HTML', 'CSS', 'Pure Wonder'],
      emoji: '🌱'
    },
    {
      year: '2023',
      title: 'First Freelance Client',
      description: 'A local coffee shop needed a website. I charged almost nothing. Learned everything.',
      details: ['WordPress', 'Improvisation', 'Late Nights'],
      emoji: '☕'
    },
    {
      year: '2024',
      title: 'The React Epiphany',
      description: 'Discovered component-based architecture. Everything clicked. Never looked back.',
      details: ['React', 'JavaScript', 'Component Lifecycle'],
      emoji: '⚛️'
    },
    {
      year: '2024',
      title: 'Dean\'s List',
      description: 'First academic recognition. Proof that passion and persistence pay off.',
      details: ['Academic Excellence', 'Web Development'],
      emoji: '🎓'
    },
    {
      year: '2025',
      title: 'Archarios Studio',
      description: 'Launched personal brand. Started saying no to projects that didn\'t align.',
      details: ['Personal Branding', 'Selective Work', 'Growth'],
      emoji: '🚀'
    }
  ];

  // Skills Data
  frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind', level: 95 },
    { name: 'Next.js', level: 85 }
  ];

  backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 82 },
    { name: 'MongoDB', level: 80 },
    { name: 'Firebase', level: 88 },
    { name: 'PostgreSQL', level: 75 }
  ];

  designSkills = [
    { name: 'Figma', level: 92 },
    { name: 'UI Design', level: 88 },
    { name: 'Prototyping', level: 85 },
    { name: 'User Research', level: 80 },
    { name: 'Design Systems', level: 83 }
  ];

  // Tools
  tools = [
    { icon: '📝', name: 'VS Code' },
    { icon: '📦', name: 'Git' },
    { icon: '🐳', name: 'Docker' },
    { icon: '📮', name: 'Postman' },
    { icon: '🎨', name: 'Figma' },
    { icon: '📊', name: 'Jira' },
    { icon: '🔧', name: 'Webpack' },
    { icon: '☁️', name: 'Vercel' }
  ];

  // Certifications
  certifications = [
    { year: '2023', name: 'Google UX Design', issuer: 'Coursera' },
    { year: '2023', name: 'AWS Cloud Practitioner', issuer: 'Amazon' },
    { year: '2022', name: 'Frontend Developer', issuer: 'Scrimba' },
    { year: '2024', name: 'JavaScript Algorithms', issuer: 'freeCodeCamp' },
    { year: '2024', name: 'Responsive Design', issuer: 'freeCodeCamp' },
    { year: '2023', name: 'Git & GitHub', issuer: 'GitHub' }
  ];

  // Interests
  interests = [
    { icon: '📸', text: 'Photography' },
    { icon: '🎮', text: 'Gaming' },
    { icon: '📚', text: 'Sci-Fi' },
    { icon: '🎵', text: 'Ambient' },
    { icon: '🌿', text: 'Nature' },
    { icon: '☕', text: 'Coffee' },
    { icon: '🏋️', text: 'Fitness' },
    { icon: '🧘', text: 'Meditation' },
    { icon: '✍️', text: 'Writing' },
    { icon: '🎨', text: 'Art' }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}