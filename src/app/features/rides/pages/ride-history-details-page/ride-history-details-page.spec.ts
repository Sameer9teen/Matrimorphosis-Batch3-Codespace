import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideHistoryDetailsPage } from './ride-history-details-page';

describe('RideHistoryDetailsPage', () => {
  let component: RideHistoryDetailsPage;
  let fixture: ComponentFixture<RideHistoryDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideHistoryDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RideHistoryDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
