import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { SectionDots } from '../../shared/section-dots/section-dots';

@Component({
  selector: 'app-hero',
  imports: [Header, SectionDots],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}