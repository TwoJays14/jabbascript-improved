import { Component } from '@angular/core';
import {ErrorMessageComponent} from "../../components/error-message/error-message.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-error-layout',
  standalone: true,
  imports: [
    ErrorMessageComponent,
    NavbarComponent
  ],
  templateUrl: './error-layout.component.html',
  styleUrl: './error-layout.component.css'
})
export class ErrorLayoutComponent {

}
