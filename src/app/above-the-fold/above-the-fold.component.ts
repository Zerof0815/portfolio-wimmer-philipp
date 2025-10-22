import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
