import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  constructor(public languageService: LanguageService) {}
    
  texts = {
    DE: {
      about: "Über das Projekt",
      aboutText: "Diese App ist ein Kanban-basiertes Task-Management-Tool. Sie ermöglicht Teams eine effiziente Organisation von Aufgaben mit Drag-and-Drop-Funktionalität, Benutzerzuweisungen und Fortschrittsverfolgung.",
      workProcess: "Mein Arbeitsprozess",
      workProcessText: "Wie halte ich meinen Code sauber und wartbar? Habe ich das Projekt in wiederverwendbare Module oder Komponenten unterteilt? Fokus auf Dokumentation, Benennung von Dateien, Variablen, Klassen und Testing.",
      groupExperience: "Meine Erfahrungen in der Teamarbeit",
      groupExperienceText: "Wie viele Personen waren im Team und welche Rolle hattest du? Beschreibe deine Aufgaben in 1-2 Sätzen, zum Beispiel: Login-Formular, Dashboard oder Chat-Funktionalität. Welche Technologien hast du verwendet? Es ist schön, gute Teamarbeit und Zusammenarbeit zu erwähnen.",
      technologyies: "Technologien",
      duration: "Zeitaufwand: 2 Monate",
      durationMobile: "Duration: 2 Monate"
    },
    EN: {
      about: "About the Project",
      aboutText: "This app is a Kanban-based task management tool. It enables teams to efficiently organize tasks with drag-and-drop functionality, user assignments, and progress tracking.",
      workProcess: "How I have organized my work process",
      workProcessText: "How do I keep my code clean and maintainable? Have I broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
      groupExperience: "My group work experience",
      groupExperienceText: "How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
      technologyies: "Technologies",
      duration: "Time spent: 2 months",
      durationMobile: "Time spent: 2 months"
    }
  };
}
