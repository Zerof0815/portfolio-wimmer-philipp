import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent {
  constructor(public languageService: LanguageService) {}

  texts = {
    DE: {
      heading: 'Kontakt',
      description: 'Fühle dich frei, mich für Jobangebote oder Projektanfragen zu kontaktieren. Ich freue mich darauf, deine Projekte mit meinem Engagement und technischen Wissen zu unterstützen.',
      emailLabel: 'E-mail:',
      phoneLabel: 'Tel:',
      nameLabel: 'Dein Name',
      emailFieldLabel: 'Deine Email',
      messageLabel: 'Deine Nachricht',
      privacyText1: 'Ich habe die',
      privacyLink: 'Datenschutzrichtlinien',
      privacyText2: 'gelesen und akzeptiere diese.',
      sendButton: 'Senden'
    },
    EN: {
      heading: 'Contact',
      description: 'Feel free to contact me for job offers or project opportunities. I am happy to support your projects with my dedication and technical skills.',
      emailLabel: 'E-mail:',
      phoneLabel: 'Tel:',
      nameLabel: 'Your Name',
      emailFieldLabel: 'Your Email',
      messageLabel: 'Your Message',
      privacyText1: 'I have read and accept the',
      privacyLink: 'privacy policy',
      privacyText2: '.',
      sendButton: 'Send'
    }
  };

  formData = {
    name: "",
    email: "",
    message: ""
  }

  privacyAccepted = false;
}
