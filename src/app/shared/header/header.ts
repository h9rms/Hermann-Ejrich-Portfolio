import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;

  navLinks: NavLink[] = [
    { label: 'About Me', fragment: 'about-me' },
    { label: 'Skillset', fragment: 'skills' },
    { label: 'Portfolio', fragment: 'portfolio' },
    { label: 'References', fragment: 'references' },
    { label: 'Contact me', fragment: 'contact' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}