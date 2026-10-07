import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDashboard } from './service-dashboard';

describe('ServiceDashboard', () => {
  let component: ServiceDashboard;
  let fixture: ComponentFixture<ServiceDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
