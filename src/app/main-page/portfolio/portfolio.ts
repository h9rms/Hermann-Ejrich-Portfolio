import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { SectionDots } from '../../shared/section-dots/section-dots';

interface Project {
  name: string;
  technologies: string[];
  description: string;
  capsule: string;
  githubUrl: string;
  liveUrl: string;
  image: string;
  icon: string;
  theme: 'yellow' | 'blue' | 'orange';
}

@Component({
  selector: 'app-portfolio',
  imports: [Header, SectionDots],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  currentIndex = 0;
  isCapsuleOpen = false;

  projects: Project[] = [
    {
      name: 'Join',
      technologies: ['HTML', 'CSS', 'Firebase', 'Angular', 'TypeScript'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      capsule: 'A short capsule describing how you participated in the development of this project.',
      githubUrl: 'https://github.com/h9rms',
      liveUrl: 'https://example.com',
      image: 'join.png',
      icon: 'join_icon.svg',
      theme: 'yellow',
    },
    {
      name: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the crazy hen.',
      capsule: 'A short capsule describing how you participated in the development of this project.',
      githubUrl: 'https://github.com/h9rms',
      liveUrl: 'https://example.com',
      image: 'sharkie.jpg',
      icon: 'sharkie_icon.svg',
      theme: 'orange',
    },
  ];

  get currentProject(): Project {
    return this.projects[this.currentIndex];
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.isCapsuleOpen = false;
  }

  previousProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.isCapsuleOpen = false;
  }

  openCapsule() {
    this.isCapsuleOpen = true;
  }

  closeCapsule() {
    this.isCapsuleOpen = false;
  }
}