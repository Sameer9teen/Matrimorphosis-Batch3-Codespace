import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyDriverCounter } from './nearby-driver-counter';

describe('NearbyDriverCounter', () => {
  let component: NearbyDriverCounter;
  let fixture: ComponentFixture<NearbyDriverCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearbyDriverCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyDriverCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
