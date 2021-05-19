import { TestBed } from '@angular/core/testing';

import { CinemaItemService } from './cinema-item.service';

describe('CinemaItemService', () => {
  let service: CinemaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
