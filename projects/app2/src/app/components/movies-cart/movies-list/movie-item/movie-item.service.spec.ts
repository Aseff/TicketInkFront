import { TestBed } from '@angular/core/testing';

import { MovieItemService } from './movie-item.service';

describe('MovieItemService', () => {
  let service: MovieItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
