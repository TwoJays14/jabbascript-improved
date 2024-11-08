import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingComponent } from './fighting.component';

describe('FightingComponent', () => {
  let component: FightingComponent;
  let fixture: ComponentFixture<FightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
