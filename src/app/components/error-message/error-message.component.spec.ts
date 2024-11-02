import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function getTitle(): DebugElement {
    return fixture.debugElement.query(By.css('.error-message'));
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message', () => {
    console.log("component: ", getTitle());
    expect(getTitle().nativeElement.textContent.toLowerCase()).toContain("page cannot be found");
  })
});
