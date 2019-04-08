import { TestBed, inject } from '@angular/core/testing';

import { DenegatedService } from './denegated.service';

describe('DenegatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DenegatedService]
    });
  });

  it('should be created', inject([DenegatedService], (service: DenegatedService) => {
    expect(service).toBeTruthy();
  }));
});
