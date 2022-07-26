import { TestBed } from '@angular/core/testing';

import { ExemplaryService } from './exemplary.service';

describe('ExemplaryService', () => {
  let service: ExemplaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemplaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
