import { Component } from '@angular/core';
import {ErrorLayoutComponent} from "../../layouts/error-layout/error-layout.component";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    ErrorLayoutComponent
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
