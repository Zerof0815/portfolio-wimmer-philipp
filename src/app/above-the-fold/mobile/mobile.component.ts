import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent {

  constructor(public languageService: LanguageService) {}

  menuOpen = false;
  imageSource = "assets/img/atf/menu-button.png";
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

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen === true) {
      this.imageSource = "assets/img/atf/close-button.png";
    } else {
      this.imageSource = "assets/img/atf/menu-button.png";
    }
  }
}
