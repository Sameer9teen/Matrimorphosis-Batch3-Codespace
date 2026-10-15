import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideStatusBoard } from './ride-status-board';

describe('RideStatusBoard', () => {
  let component: RideStatusBoard;
  let fixture: ComponentFixture<RideStatusBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideStatusBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(RideStatusBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
