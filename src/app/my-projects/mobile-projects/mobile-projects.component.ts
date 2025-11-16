import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { ElPolloLocoComponent } from "../projects/el-pollo-loco/el-pollo-loco.component";
import { OngoingProjectsComponent } from "../projects/ongoing-projects/ongoing-projects.component";
import { JoinComponent } from '../projects/join/join.component';

@Component({
  selector: 'app-mobile-projects',
  standalone: true,
  imports: [NgClass, CommonModule, JoinComponent, ElPolloLocoComponent, OngoingProjectsComponent],
  templateUrl: './mobile-projects.component.html',
  styleUrl: './mobile-projects.component.scss'
})
export class MobileProjectsComponent {
  projects = [
    { id: 1, name: 'Project' },
    { id: 2, name: 'Project' },
    { id: 3, name: 'Ongoing' }
  ];

  selectedProjectId = 1;

  selectProject(id: number) {
    this.selectedProjectId = id;
  }
}
