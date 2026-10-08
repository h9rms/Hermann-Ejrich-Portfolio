import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';
import { SectionDots } from '../../shared/section-dots/section-dots';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, Footer, Header, SectionDots],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}