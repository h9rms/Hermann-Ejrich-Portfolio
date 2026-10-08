import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { SectionDots } from '../../shared/section-dots/section-dots';

@Component({
  selector: 'app-about-me',
  imports: [Header, SectionDots],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  isOverlayOpen = false;

  facts: string[] = [
    'Team player',
    'Continuously learning',
    'Creative thinker',
    'Based in [Stadt]',
    'Open to work remote',
    'Open to relocate',
  ];

  openOverlay() {
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
  }
}