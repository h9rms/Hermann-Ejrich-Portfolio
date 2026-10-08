import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}