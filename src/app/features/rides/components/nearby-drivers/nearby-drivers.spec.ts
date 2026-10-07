import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyDrivers } from './nearby-drivers';

describe('NearbyDrivers', () => {
  let component: NearbyDrivers;
  let fixture: ComponentFixture<NearbyDrivers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearbyDrivers],
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyDrivers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
