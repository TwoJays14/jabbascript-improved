import { Component } from '@angular/core';
import {LoginLayoutComponent} from "../../layouts/login-layout/login-layout.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
