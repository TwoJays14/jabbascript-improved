import { Component } from '@angular/core';
import {ErrorMessageComponent} from "../../components/error-message/error-message.component";

@Component({
  selector: 'app-error-layout',
  standalone: true,
  imports: [
    ErrorMessageComponent
  ],
  templateUrl: './error-layout.component.html',
  styleUrl: './error-layout.component.css'
})
export class ErrorLayoutComponent {

}
