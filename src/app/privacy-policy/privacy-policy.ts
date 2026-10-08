import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../shared/footer/footer';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, Footer, Header],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}