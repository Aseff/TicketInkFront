import { TestBed } from '@angular/core/testing';

import { CinemaListService } from './cinema-list.service';

describe('CinemaListService', () => {
  let service: CinemaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
