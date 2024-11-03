import { Component } from '@angular/core';
import {RegisterLayoutComponent} from "../../layouts/register-layout/register-layout.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RegisterLayoutComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
