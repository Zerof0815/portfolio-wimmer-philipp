import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  
  constructor(public languageService: LanguageService) {}

  texts = {
    DE: {
      whyMe: "Warum ich",
      why: "Was mich am Coden wahnsinnig begeistert, ist, dass man etwas aus dem Nichts erschafft und seine Kreativität voll ausleben kann. Durch mein analytisches Denken und den Drang, Neues zu lernen, kann ich mich in diesem Bereich komplett entfalten.",
      blueTextLocation: "Ich bin",
      location: "in Eisenstadt ansässig"
    },
    EN: {
      whyMe: "Why me",
      why: "What excites me so much about coding is that you can create something out of nothing and fully express your creativity. Through my analytical way of thinking and my drive to learn new things, I’m able to really grow and thrive in this field.",
      blueTextLocation: "I am",
      location: "located in Eisenstadt"
    }
  };
}
