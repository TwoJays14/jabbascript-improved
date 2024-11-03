import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ErrorComponent} from "./pages/error/error.component";
import {FightingComponent} from "./pages/fighting/fighting.component";
import {QuestComponent} from "./pages/quest/quest.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LeaderboardComponent} from "./pages/leaderboard/leaderboard.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fighting', component: FightingComponent},
  {path: 'quest', component: QuestComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: ErrorComponent}
];
