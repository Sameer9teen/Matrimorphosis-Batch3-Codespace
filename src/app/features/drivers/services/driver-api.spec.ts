import { TestBed } from '@angular/core/testing';

import { DriverApi } from './driver-api';

describe('DriverApi', () => {
  let service: DriverApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
