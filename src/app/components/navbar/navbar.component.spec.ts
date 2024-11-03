import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {By} from "@angular/platform-browser";
import {DebugElement, WritableSignal} from "@angular/core";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let isLoggedIn: WritableSignal<boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function getNavbarTitle(): DebugElement {
    return fixture.debugElement.query(By.css('h1'));
  }

  function getNavbarItems(): DebugElement[] {
    return fixture.debugElement.queryAll(By.css('.nav-item'));
  }

  function getProfileComponent(): DebugElement {
    return fixture.debugElement.query(By.css('.profile'));
  }

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the navbar title', () => {
    console.log(getNavbarTitle());
    expect(getNavbarTitle().nativeElement.textContent.toLowerCase()).toContain('koding kombat');
  });

  it('should display all navbar items', () => {
    expect(getNavbarItems()[0].nativeElement.textContent.toLowerCase()).toContain('fighting');
    expect(getNavbarItems()[1].nativeElement.textContent.toLowerCase()).toContain('quest');
    expect(getNavbarItems()[2].nativeElement.textContent.toLowerCase()).toContain('leaderboard');
    expect(getNavbarItems()[3].nativeElement.textContent.toLowerCase()).toContain('login');
    expect(getNavbarItems()[3].nativeElement.textContent.toLowerCase()).toContain('register');
  });

  describe("when a user is logged in", () => {
    beforeEach(() => {
      isLoggedIn = fixture.debugElement.componentInstance.isLoggedIn.set(true);
      fixture.detectChanges();
    });

    afterAll(() => {
      isLoggedIn = fixture.debugElement.componentInstance.isLoggedIn.set(false);
    })

    it('should display the profile component', () => {
      expect(getProfileComponent()).toBeDefined();
    })
  });

  describe("when a user is not logged in", () => {
    beforeEach(() => {
      isLoggedIn = fixture.debugElement.componentInstance.isLoggedIn.set(false);
      fixture.detectChanges();
    });

    it("should not display the profile component", () => {
      expect(getProfileComponent()).toBeNull();
    })
  });

});
