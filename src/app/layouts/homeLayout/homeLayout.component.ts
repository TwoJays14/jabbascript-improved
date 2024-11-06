import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {HeroComponent} from "../../components/hero/hero.component";

@Component({
  selector: 'app-homeLayout',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent
  ],
  templateUrl: './homeLayout.component.html',
  styleUrl: './homeLayout.component.css'
})
export class HomeLayoutComponent {

}
