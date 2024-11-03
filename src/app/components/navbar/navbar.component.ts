import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {LOGO_PATH} from "../../constants/image-paths";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  public readonly logoPath: string = LOGO_PATH;
  public isLoggedIn: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    console.log("init");
  }

}
