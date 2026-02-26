import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html'
})
export class About {
  
  // Technical Skills
  technicalSkills = [
    { name: 'HTML5/CSS3', level: 95, delay: '0ms' },
    { name: 'JavaScript/TypeScript', level: 90, delay: '50ms' },
    { name: 'React', level: 88, delay: '100ms' },
    { name: 'Angular', level: 85, delay: '150ms' },
    { name: 'Node.js', level: 82, delay: '200ms' },
    { name: 'MongoDB', level: 80, delay: '250ms' },
    { name: 'Figma', level: 90, delay: '300ms' },
    { name: 'Tailwind CSS', level: 95, delay: '350ms' }
  ];

  // Soft Skills
  softSkills = [
    { icon: '🗣️', name: 'Communication', description: 'Clear and concise' },
    { icon: '🧠', name: 'Problem Solving', description: 'Creative thinker' },
    { icon: '⏱️', name: 'Time Management', description: 'Deadline focused' },
    { icon: '🤝', name: 'Collaboration', description: 'Team player' },
    { icon: '📊', name: 'Project Management', description: 'Organized approach' },
    { icon: '🎯', name: 'Attention to Detail', description: 'Pixel perfect' }
  ];

  // Work Experience
  workExperience = [
    {
      period: '2024 - Present',
      position: 'Web Developer',
      company: 'Archarios Studio',
      location: 'Remote',
      description: 'Leading web development projects for international clients. Building responsive applications with modern frameworks.'
    },
    {
      period: '2023 - 2024',
      position: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Pampanga, PH',
      description: 'Worked with 15+ clients on various web projects including e-commerce, portfolios, and business websites.'
    },
    {
      period: '2023',
      position: 'Web Development Intern',
      company: 'TechStart PH',
      location: 'Remote',
      description: 'Assisted in developing client websites and learned industry best practices in an agile environment.'
    }
  ];

  // Education
  education = [
    {
      period: '2023 - 2027',
      degree: 'BS Web Development',
      school: 'Holy Angel University',
      location: 'Pampanga, PH',
      description: 'Specializing in web technologies, human-computer interaction, and modern development practices.',
      achievement: 'Dean\'s List 2024, 2025 · GPA: 3.8/4.0'
    },
    {
      period: '2019 - 2023',
      degree: 'High School Diploma',
      school: 'Pampanga High School',
      location: 'Pampanga, PH',
      description: 'STEM strand with focus on computer science fundamentals and mathematics.',
      achievement: 'Graduated with Honors'
    }
  ];

  // Certifications
  certifications = [
    { icon: '🎨', name: 'Google UX Design', issuer: 'Coursera', year: '2023' },
    { icon: '☁️', name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2023' },
    { icon: '⚛️', name: 'Frontend Developer', issuer: 'Scrimba', year: '2022' },
    { icon: '📊', name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2024' },
    { icon: '📱', name: 'Responsive Design', issuer: 'freeCodeCamp', year: '2023' },
    { icon: '🐙', name: 'Git & GitHub', issuer: 'GitHub', year: '2023' }
  ];

  // Interests
  interests = [
    { icon: '📸', name: 'Photography', description: 'Chasing golden hour' },
    { icon: '🎮', name: 'Gaming', description: 'Open world RPGs' },
    { icon: '📚', name: 'Reading', description: 'Sci-fi & fantasy' },
    { icon: '🎵', name: 'Music', description: 'Ambient & lofi' },
    { icon: '☕', name: 'Coffee', description: 'Home barista' },
    { icon: '🏋️', name: 'Fitness', description: 'Calisthenics' },
    { icon: '🌿', name: 'Nature', description: 'Hiking & trails' },
    { icon: '✍️', name: 'Writing', description: 'Tech blogging' }
  ];

  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToStory(): void {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  }
}