import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [Header],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  isOverlayOpen = false;

  skills: Skill[] = [
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'js.svg' },
    { name: 'TypeScript', icon: 'ts.svg' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'Supabase', icon: 'supabase.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'REST-API', icon: 'api.svg' },
    { name: 'Scrum', icon: 'scrum.svg' },
    { name: 'Material Design', icon: 'material_design.svg' },
  ];

  learningSkills: Skill[] = [
    { name: 'React', icon: 'react.svg' },
    { name: 'Vue.js', icon: 'vue.svg' },
  ];

  openOverlay() {
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
  }
}
