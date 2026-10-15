import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverApiDemo } from './driver-api-demo';

describe('DriverApiDemo', () => {
  let component: DriverApiDemo;
  let fixture: ComponentFixture<DriverApiDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverApiDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(DriverApiDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
