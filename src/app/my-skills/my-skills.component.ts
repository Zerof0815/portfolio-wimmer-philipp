import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(public languageService: LanguageService) {}
  
    texts = {
      DE: {
        mySkills: "Meine Skills",
        currentlyLearning: "Akuell lerne ich",
        currentlyLearningText: "Ich bin motiviert, meine Fähigkeiten laufend weiterzuentwickeln und offen für neue Herausforderungen. Ich verfolge neue Technologien mit Interesse und bringe auch gerne eigene Ideen ein.",
      },
      EN: {
        mySkills: "My kills",
        currentlyLearning: "I am currently learning",
        currentlyLearningText: "I am motivated to continuously develop my skills and remain open to new challenges. I follow new technologies with great interest and enjoy contributing my own ideas to implement modern and practical solutions."
      }
    };

  skillIcons: string[] = [
    "assets/img/my-skills/angular-icon.png",
    "assets/img/my-skills/typescript-icon.png",
    "assets/img/my-skills/javascript-icon.png",
    "assets/img/my-skills/html-icon.png",
    "assets/img/my-skills/css-icon.png",
    "assets/img/my-skills/restapi-icon.png",
    "assets/img/my-skills/firebase-icon.png",
    "assets/img/my-skills/git-icon.png",
    "assets/img/my-skills/material-icon.png",
    "assets/img/my-skills/scrum-icon.png",
  ]
}
