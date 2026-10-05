import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-main-page',
  imports: [Hero, AboutMe, Skills, Portfolio, References, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}