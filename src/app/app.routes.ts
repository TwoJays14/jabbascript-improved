import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ErrorComponent} from "./pages/error/error.component";
import {FightingComponent} from "./pages/fighting/fighting.component";
import {QuestComponent} from "./pages/quest/quest.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LeaderboardComponent} from "./pages/leaderboard/leaderboard.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'fighting', loadComponent: () => import('./pages/fighting/fighting.component').then(m => m.FightingComponent)
  },
  {
    path: 'quest',
    loadComponent: () => import('./pages/quest/quest.component').then(m => m.QuestComponent)
  },
  {
    path: 'leaderboard',
    loadComponent: () => import('./pages/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error/error.component').then(m => m.ErrorComponent)
  },
];
