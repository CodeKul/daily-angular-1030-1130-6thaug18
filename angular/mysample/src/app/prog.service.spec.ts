import { TestBed, inject } from '@angular/core/testing';

import { ProgService } from './prog.service';

describe('ProgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgService]
    });
  });

  it('should be created', inject([ProgService], (service: ProgService) => {
    expect(service).toBeTruthy();
  }));
});
