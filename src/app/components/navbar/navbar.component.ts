import {Component, OnInit, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoggedIn.set(true);
    }, 3000)
  }

}
