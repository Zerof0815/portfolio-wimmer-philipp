import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
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
