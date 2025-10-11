import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { JoinComponent } from "./projects/join/join.component";
import { ElPolloLocoComponent } from "./projects/el-pollo-loco/el-pollo-loco.component";
import { OngoingProjectsComponent } from "./projects/ongoing-projects/ongoing-projects.component";

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [NgClass, CommonModule, JoinComponent, ElPolloLocoComponent, OngoingProjectsComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projects = [
    { id: 1, name: 'Join' },
    { id: 2, name: 'El Pollo Loco Space' },
    { id: 3, name: 'Ongoing Project' }
  ];

  selectedProjectId = 1;

  selectProject(id: number) {
    this.selectedProjectId = id;
  }
}
