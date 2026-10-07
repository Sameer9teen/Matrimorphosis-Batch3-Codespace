import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideOptionCard } from './ride-option-card';

describe('RideOptionCard', () => {
  let component: RideOptionCard;
  let fixture: ComponentFixture<RideOptionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideOptionCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RideOptionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
