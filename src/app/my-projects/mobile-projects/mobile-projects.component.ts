import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { JoinComponent } from '../projects/join/join.component';
import { ElPolloLocoComponent } from "../projects/el-pollo-loco/el-pollo-loco.component";
import { OngoingProjectsComponent } from "../projects/ongoing-projects/ongoing-projects.component";
import { LanguageService } from "../../services/language.service";

@Component({
  selector: 'app-mobile-projects',
  standalone: true,
  imports: [NgClass, CommonModule, JoinComponent, ElPolloLocoComponent, OngoingProjectsComponent],
  templateUrl: './mobile-projects.component.html',
  styleUrl: './mobile-projects.component.scss'
})

export class MobileProjectsComponent {
  constructor(public languageService: LanguageService) {}
    
  texts = {
    DE: {
      myProjects: "Meine Projekte",
      join: "Join",
      elPolloLoco: "El Pollo Loco",
      ongoingProjects: "Laufende Projekte"
    },
    EN: {
      myProjects: "My projects",
      join: "Join",
      elPolloLoco: "El Pollo Loco",
      ongoingProjects: "Ongoing projects"
    }
  };

  projects = [
    { id: 1, name: 'Join' },
    { id: 2, name: 'El Pollo Loco Space' },
    { id: 3, name: 'Ongoing Project' }
  ];

  selectedProjectId = 1;

  selectProject(id: number) {
    this.selectedProjectId = id;
  }

  getProjectText(id: number): string {
    const lang = this.languageService.currentLang();
    type TextKeys = 'myProjects' | 'join' | 'elPolloLoco' | 'ongoingProjects';
    const keyMap: { [key: number]: TextKeys } = {
      1: 'join',
      2: 'elPolloLoco',
      3: 'ongoingProjects'
    };
    const key = keyMap[id];
    return key ? this.texts[lang][key] : '';
  }
}
