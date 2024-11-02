import { Component } from '@angular/core';
import {HomeLayoutComponent} from "../../layouts/homeLayout/homeLayout.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
