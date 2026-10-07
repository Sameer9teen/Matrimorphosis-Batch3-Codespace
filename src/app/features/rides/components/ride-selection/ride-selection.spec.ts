import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideSelection } from './ride-selection';

describe('RideSelection', () => {
  let component: RideSelection;
  let fixture: ComponentFixture<RideSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideSelection],
    }).compileComponents();

    fixture = TestBed.createComponent(RideSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
