import { TestBed } from '@angular/core/testing';

import { RideBasedService } from './ride-based-service';

describe('RideBasedService', () => {
  let service: RideBasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RideBasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
