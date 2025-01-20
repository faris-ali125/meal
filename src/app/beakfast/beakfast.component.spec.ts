import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeakfastComponent } from './beakfast.component';

describe('BeakfastComponent', () => {
  let component: BeakfastComponent;
  let fixture: ComponentFixture<BeakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeakfastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
