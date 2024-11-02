import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  constructor() { }

  login(): void {
   this.isLoggedIn.next(true);
  }

  logout(): void {
    this.isLoggedIn.next(false);
  }
}
