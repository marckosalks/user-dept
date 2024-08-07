import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCardComponent } from './use-card.component';

describe('UseCardComponent', () => {
  let component: UseCardComponent;
  let fixture: ComponentFixture<UseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
