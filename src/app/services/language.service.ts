import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang = signal<'DE' | 'EN'>('DE');

  constructor() {
    const savedLang = localStorage.getItem('lang') as 'DE' | 'EN' | null;
    if (savedLang) {
      this.currentLang.set(savedLang);
    }
  }

  setLanguage(lang: 'DE' | 'EN') {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }
}
