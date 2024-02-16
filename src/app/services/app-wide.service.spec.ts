import { TestBed } from '@angular/core/testing';

import { AppWideService } from './app-wide.service';

describe('AppWideService', () => {
  let service: AppWideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppWideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
