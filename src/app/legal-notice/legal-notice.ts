import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../shared/footer/footer';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, Footer, Header],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}