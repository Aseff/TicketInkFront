import { TestBed } from '@angular/core/testing';

import { CinemaCartService } from './cinema-cart.service';

describe('CinemaCartService', () => {
  let service: CinemaCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
