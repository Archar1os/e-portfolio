import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  year: string;
  icon: string;
  tech: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html'
})
export class Projects {
  
  // Filter options
  filters: string[] = ['All', 'Web Development', 'UI/UX Design', 'Full Stack', 'Mobile', 'E-commerce', 'Dashboard'];
  activeFilter: string = 'All';
  
  // Selected project for modal
  selectedProject: Project | null = null;

  // Projects data
  projects: Project[] = [
    {
      id: 1,
      title: 'Modern E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
      longDescription: 'This comprehensive e-commerce solution was built for a local retail brand looking to expand online. The platform features real-time inventory management, secure payment processing via Stripe, an intuitive admin dashboard for order management, and a responsive customer-facing storefront. The project focused on performance optimization and conversion rate optimization.',
      category: 'E-commerce',
      year: '2024',
      icon: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
      features: [
        'Real-time inventory tracking',
        'Secure payment processing',
        'Admin dashboard with analytics',
        'Responsive product catalog',
        'User authentication and profiles',
        'Order management system'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      caseStudyUrl: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      description: 'Complete mobile app UI/UX design for tracking workouts, nutrition, and fitness goals.',
      longDescription: 'A comprehensive fitness tracking application designed to help users monitor their workouts, nutrition, and overall health goals. The design focuses on intuitive user flows, motivational elements, and seamless data visualization. The project included user research, wireframing, prototyping, and high-fidelity UI design.',
      category: 'UI/UX Design',
      year: '2024',
      icon: '🏃',
      tech: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Wireframing'],
      features: [
        'Workout tracking and logging',
        'Nutrition and meal planning',
        'Progress visualization',
        'Goal setting and reminders',
        'Social sharing features'
      ],
      liveUrl: '#',
      githubUrl: '',
      caseStudyUrl: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard with interactive charts and customizable widgets.',
      longDescription: 'A powerful analytics dashboard built for a SaaS company to visualize their key metrics. The dashboard features real-time data updates, interactive charts, customizable widgets, and role-based access control. The backend handles large datasets efficiently with caching and optimized queries.',
      category: 'Dashboard',
      year: '2024',
      icon: '📊',
      tech: ['React', 'D3.js', 'Node.js', 'Express', 'PostgreSQL', 'WebSockets'],
      features: [
        'Real-time data updates',
        'Interactive charts and graphs',
        'Customizable dashboard layout',
        'Data export functionality',
        'User role management'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Content Management System',
      description: 'Custom CMS for bloggers with rich text editor, image optimization, and SEO tools.',
      longDescription: 'A custom-built content management system designed for bloggers and content creators. The platform features a rich text editor, image optimization pipeline, SEO analysis tools, and automated social media posting. Built with performance and user experience in mind.',
      category: 'Full Stack',
      year: '2023',
      icon: '📝',
      tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'Cloudinary', 'Tailwind CSS'],
      features: [
        'Rich text editor with markdown support',
        'Automated image optimization',
        'SEO analysis and recommendations',
        'Social media integration',
        'Analytics dashboard'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Restaurant Mobile App',
      description: 'Mobile app design for a restaurant chain with online ordering and loyalty program.',
      longDescription: 'A comprehensive mobile app design for a popular restaurant chain. The app includes online ordering, table reservations, loyalty program integration, and push notifications. The design focused on streamlining the ordering process and enhancing customer engagement.',
      category: 'Mobile',
      year: '2023',
      icon: '🍔',
      tech: ['Figma', 'Prototyping', 'User Testing', 'iOS', 'Android'],
      features: [
        'Online ordering system',
        'Table reservations',
        'Loyalty rewards program',
        'Push notifications',
        'Order tracking'
      ],
      liveUrl: '#',
      githubUrl: ''
    },
    {
      id: 6,
      title: 'RESTful API Service',
      description: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation.',
      longDescription: 'A production-ready REST API service built for a mobile app backend. Features include JWT authentication, rate limiting, request validation, comprehensive error handling, and auto-generated Swagger documentation. The API handles thousands of requests per day with minimal latency.',
      category: 'API',
      year: '2023',
      icon: '⚡',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Docker'],
      features: [
        'JWT authentication',
        'Rate limiting',
        'Request validation',
        'Comprehensive error handling',
        'Auto-generated documentation',
        'Docker containerization'
      ],
      liveUrl: 'https://api.example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'Minimalist portfolio website with smooth animations and dark mode support.',
      longDescription: 'A personal portfolio website designed to showcase creative work. Features include smooth scroll animations, dark/light mode toggle, project filtering, and a custom cursor. The design emphasizes typography and whitespace.',
      category: 'Web Development',
      year: '2025',
      icon: '🎨',
      tech: ['Angular', 'Tailwind CSS', 'TypeScript', 'GSAP'],
      features: [
        'Smooth scroll animations',
        'Dark/light mode',
        'Project filtering',
        'Custom cursor',
        'Responsive design'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 8,
      title: 'Weather Application',
      description: 'Real-time weather app with interactive maps and 7-day forecasts.',
      longDescription: 'A weather application that provides real-time weather data, interactive radar maps, and 7-day forecasts. The app uses geolocation to detect user location and allows searching for any city worldwide. Features include weather alerts and beautiful visualizations.',
      category: 'Web Development',
      year: '2023',
      icon: '🌤️',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
      features: [
        'Real-time weather data',
        'Interactive radar maps',
        '7-day forecasts',
        'Location search',
        'Weather alerts'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 9,
      title: 'Banking Dashboard',
      description: 'Financial dashboard for tracking expenses, investments, and savings goals.',
      longDescription: 'A comprehensive financial dashboard designed for a fintech startup. Users can track expenses, monitor investments, set savings goals, and view financial insights. The design focuses on clarity and ease of use while handling complex financial data.',
      category: 'Dashboard',
      year: '2024',
      icon: '💰',
      tech: ['Figma', 'UI Design', 'Data Visualization', 'Prototyping'],
      features: [
        'Expense tracking',
        'Investment monitoring',
        'Savings goals',
        'Financial insights',
        'Budget planning'
      ],
      liveUrl: '#',
      githubUrl: ''
    }
  ];

  constructor(private router: Router) {}

  // Get filtered projects based on active filter
  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  // Set active filter
  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
    // Optional: scroll to top of grid
    // document.querySelector('.projects-grid')?.scrollIntoView({ behavior: 'smooth' });
  }

  // Open project modal
  openProjectModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  // Load more projects (pagination)
  loadMore(): void {
    // This would typically load more from an API
    alert('Loading more projects...');
  }

  // Navigation
  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}