import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-register-layout',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './register-layout.component.html',
  styleUrl: './register-layout.component.css'
})
export class RegisterLayoutComponent {

}
