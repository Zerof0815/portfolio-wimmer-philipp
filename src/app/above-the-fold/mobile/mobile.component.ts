import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent {
  menuOpen = false;
  imageSource = "assets/img/atf/menu-button.png";
  currentLang: 'DE' | 'EN' = 'DE';

  setLanguage(lang: 'DE' | 'EN') {
    this.currentLang = lang;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen === true) {
      this.imageSource = "assets/img/atf/close-button.png";
    } else {
      this.imageSource = "assets/img/atf/menu-button.png";
    }
  }
}
