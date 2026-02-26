import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, RouterLink],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {

  // Frontend Skills
  frontendSkills = [
    'React', 'Angular', 'TypeScript', 'JavaScript',
    'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'
  ];

  // Backend Skills
  backendSkills = [
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'Firebase', 'REST APIs', 'GraphQL', 'Docker'
  ];

  // Design Skills
  designSkills = [
    'Figma', 'Adobe XD', 'UI Design', 'UX Research',
    'Prototyping', 'Wireframing', 'Design Systems'
  ];

  // Tools
  tools = [
    'Git', 'GitHub', 'VS Code', 'Postman',
    'Jira', 'Webpack', 'Vercel', 'Netlify'
  ];

  // Soft Skills
  softSkills = [
    'Communication', 'Problem Solving', 'Team Leadership',
    'Time Management', 'Adaptability', 'Attention to Detail',
    'Project Management', 'Critical Thinking'
  ];

  // Languages
  languages = [
    { name: 'English', level: 'Fluent', percentage: 95 },
    { name: 'Filipino', level: 'Native', percentage: 100 },
    { name: 'Japanese', level: 'Basic', percentage: 30 }
  ];

  // Work Experience
  workExperience = [
    {
      date: '2024 - Present',
      title: 'Web Developer',
      company: 'Archarios Studio',
      location: 'Remote',
      description: 'Leading web development projects for clients worldwide. Designing and implementing responsive web applications using modern frameworks.',
      achievements: [
        'Delivered 10+ client projects with 100% satisfaction',
        'Implemented CI/CD pipelines reducing deployment time',
        'Mentored junior developers'
      ]
    },
    {
      date: '2023 - 2024',
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Pampanga, PH',
      description: 'Worked with various clients to build custom websites and web applications tailored to their specific needs.',
      achievements: [
        'Completed 15+ freelance projects',
        'Maintained 5-star client rating',
        'Specialized in e-commerce and portfolio sites'
      ]
    },
    {
      date: '2023 - 2023',
      title: 'Web Development Intern',
      company: 'TechStart PH',
      location: 'Remote',
      description: 'Assisted in developing and maintaining client websites. Participated in agile development processes.',
      achievements: [
        'Contributed to 5 production websites',
        'Learned industry best practices',
        'Received mentorship from senior developers'
      ]
    }
  ];

  // Education
  education = [
    {
      date: '2023 - 2027',
      degree: 'BS Web Development',
      school: 'Holy Angel University',
      location: 'Pampanga, PH',
      details: 'Specialization in Web Technologies and Human-Computer Interaction. Focus on modern web development practices and user experience design.',
      gpa: '3.8/4.0',
      honors: 'Dean\'s List 2024, 2025'
    },
    {
      date: '2019 - 2023',
      degree: 'High School Diploma',
      school: 'Pampanga High School',
      location: 'Pampanga, PH',
      details: 'STEM Strand with focus on Computer Science fundamentals.',
      gpa: '94%',
      honors: 'With Honors'
    }
  ];

  // Certifications
  certifications = [
    { name: 'Google UX Design', issuer: 'Coursera', year: '2023' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2023' },
    { name: 'Frontend Developer', issuer: 'Scrimba', year: '2022' },
    { name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2024' },
    { name: 'Responsive Design', issuer: 'freeCodeCamp', year: '2023' },
    { name: 'Git & GitHub', issuer: 'GitHub', year: '2023' }
  ];

  // Awards
  awards = [
    { icon: '🏆', name: 'Dean\'s List Award', issuer: 'Holy Angel University', year: '2024' },
    { icon: '🥇', name: 'Web Development Competition', issuer: 'TechStart PH', year: '2023' },
    { icon: '⭐', name: 'Outstanding Student Award', issuer: 'Pampanga High School', year: '2023' },
    { icon: '📱', name: 'Best Mobile Design', issuer: 'UI/UX Hackathon', year: '2024' }
  ];

  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  downloadPDF(): void {
    // This would trigger PDF download
    alert('PDF download would start here');
    // window.open('/assets/resume.pdf', '_blank');
  }

  printResume(): void {
    window.print();
  }
}
