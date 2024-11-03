import { Component } from '@angular/core';
import {FightingLayoutComponent} from "../../layouts/fighting-layout/fighting-layout.component";

@Component({
  selector: 'app-fighting',
  standalone: true,
  imports: [
    FightingLayoutComponent
  ],
  templateUrl: './fighting.component.html',
  styleUrl: './fighting.component.css'
})
export class FightingComponent {

}
