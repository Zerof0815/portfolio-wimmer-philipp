import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})
export class ElPolloLocoComponent {
  constructor(public languageService: LanguageService) {}
    
  texts = {
    DE: {
      about: "Über das Projekt",
      aboutText: "Diese App ist eine Slack Clone App. Sie revolutioniert die Teamkommunikation und Zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeit-Messaging und robuster Kanalorganisation.",
      workProcess: "Mein Arbeitsprozess",
      workProcessText: "Wie halte ich meinen Code sauber und wartbar? Habe ich das Projekt in wiederverwendbare Module oder Komponenten unterteilt? Fokus auf Dokumentation, Benennung von Dateien, Variablen, Klassen und Testing.",
      groupExperience: "Meine Erfahrungen in der Teamarbeit",
      groupExperienceText: "Wie viele Personen waren im Team und welche Rolle hattest du? Beschreibe deine Aufgaben in 1-2 Sätzen, zum Beispiel: Login-Formular, Dashboard oder Chat-Funktionalität. Welche Technologien hast du verwendet? Es ist schön, gute Teamarbeit und Zusammenarbeit zu erwähnen.",
      technologyies: "Technologien",
      durationMobile: "Zeitaufwand: 2 Monate",
      duration: "Zeitaufwand: 2 Monate",
    },
    EN: {
      about: "About the Project",
      aboutText: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      workProcess: "How I have organized my work process",
      workProcessText: "How do I keep my code clean and maintainable? Have I broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
      groupExperience: "My group work experience",
      groupExperienceText: "How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
      technologyies: "Technologies",
      durationMobile: "Time spent: 2 months",
      duration: "Time spent: 2 months",
    }
  };
}
