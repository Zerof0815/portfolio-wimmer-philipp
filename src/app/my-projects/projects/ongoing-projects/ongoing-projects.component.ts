import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-ongoing-projects',
  standalone: true,
  imports: [],
  templateUrl: './ongoing-projects.component.html',
  styleUrl: './ongoing-projects.component.scss'
})
export class OngoingProjectsComponent {
  constructor(public languageService: LanguageService) {}
    
  texts = {
    DE: {
      aboutText: "Diese Sektion zeigt meine aktuellen Projekte, an denen ich arbeite. Hier entwickle ich neue Ideen und Technologien, um meine Fähigkeiten weiterzuentwickeln und innovative Lösungen zu schaffen.",
      technologyies: "Technologien",
      projectName: "Laufende Projekte",
      technologiesText: "Technologien:"
    },
    EN: {
      aboutText: "This section showcases my ongoing projects that I am currently working on. Here, I develop new ideas and technologies to further enhance my skills and create innovative solutions.",
      technologyies: "Technologies",
      projectName: "Ongoing Projects",
      technologiesText: "Technologies:"
    }
  };
}
