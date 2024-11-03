import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-quest-layout',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './quest-layout.component.html',
  styleUrl: './quest-layout.component.css'
})
export class QuestLayoutComponent {

}
