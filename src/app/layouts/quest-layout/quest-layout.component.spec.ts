import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestLayoutComponent } from './quest-layout.component';

describe('QuestLayoutComponent', () => {
  let component: QuestLayoutComponent;
  let fixture: ComponentFixture<QuestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
