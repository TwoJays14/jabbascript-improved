import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-homeLayout',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './homeLayout.component.html',
  styleUrl: './homeLayout.component.css'
})
export class HomeLayoutComponent {

}
