import { Component } from '@angular/core';
import {LeaderboardLayoutComponent} from "../../layouts/leaderboard-layout/leaderboard-layout.component";

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [
    LeaderboardLayoutComponent
  ],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {

}
