import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';

interface Reference {
  name: string;
  role: string;
  text: string;
  linkedinUrl: string;
}

@Component({
  selector: 'app-references',
  imports: [Header],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  references: Reference[] = [
    {
      name: 'Tanja Schulz',
      role: 'Frontend Developer',
      text: 'Hermann has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      linkedinUrl: 'https://www.linkedin.com',
    },
    {
      name: 'Hans Janisch',
      role: 'Team Partner',
      text: "I had the good fortune of working with Hermann in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
      linkedinUrl: 'https://www.linkedin.com',
    },
    {
      name: 'Anton Fischer',
      role: 'Team Partner',
      text: "Our project benefited enormously from Hermann's efficient way of working.",
      linkedinUrl: 'https://www.linkedin.com',
    },
  ];
}