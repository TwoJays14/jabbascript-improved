import { Component } from '@angular/core';
import {QuestLayoutComponent} from "../../layouts/quest-layout/quest-layout.component";

@Component({
  selector: 'app-quest',
  standalone: true,
  imports: [
    QuestLayoutComponent
  ],
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.css'
})
export class QuestComponent {

}
