import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, Footer, Header],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}