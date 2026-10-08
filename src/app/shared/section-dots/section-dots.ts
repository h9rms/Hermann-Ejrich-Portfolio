import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-dots',
  imports: [],
  templateUrl: './section-dots.html',
  styleUrl: './section-dots.scss',
})
export class SectionDots {
  @Input() active = 0;
  @Input() theme: 'light' | 'dark' = 'light';

  sections: string[] = ['hero', 'about-me', 'skills', 'portfolio', 'references', 'contact'];
}