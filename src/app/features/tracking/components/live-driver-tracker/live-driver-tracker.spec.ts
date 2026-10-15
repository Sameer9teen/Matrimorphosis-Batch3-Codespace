import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDriverTracker } from './live-driver-tracker';

describe('LiveDriverTracker', () => {
  let component: LiveDriverTracker;
  let fixture: ComponentFixture<LiveDriverTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveDriverTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveDriverTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
