import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideAnalytics } from './ride-analytics';

describe('RideAnalytics', () => {
  let component: RideAnalytics;
  let fixture: ComponentFixture<RideAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideAnalytics],
    }).compileComponents();

    fixture = TestBed.createComponent(RideAnalytics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
