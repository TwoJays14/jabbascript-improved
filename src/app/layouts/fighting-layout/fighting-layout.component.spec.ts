import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingLayoutComponent } from './fighting-layout.component';

describe('FightingLayoutComponent', () => {
  let component: FightingLayoutComponent;
  let fixture: ComponentFixture<FightingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightingLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FightingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
