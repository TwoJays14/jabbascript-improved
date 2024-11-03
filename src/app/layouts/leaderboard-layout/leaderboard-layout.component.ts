import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-leaderboard-layout',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './leaderboard-layout.component.html',
  styleUrl: './leaderboard-layout.component.css'
})
export class LeaderboardLayoutComponent {

}
