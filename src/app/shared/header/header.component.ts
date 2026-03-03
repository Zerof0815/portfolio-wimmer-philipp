import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public languageService: LanguageService) {}

  texts = {
    DE: {
      why: "Warum Ich",
      skills: "Skills",
      projects: "Projekte",
      contact: "Kontakt"
    },
    EN: {
      why: "Why Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    }
  };
}
