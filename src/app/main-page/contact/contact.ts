import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}