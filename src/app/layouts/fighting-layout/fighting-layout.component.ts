import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-fighting-layout',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './fighting-layout.component.html',
  styleUrl: './fighting-layout.component.css'
})
export class FightingLayoutComponent {

}
