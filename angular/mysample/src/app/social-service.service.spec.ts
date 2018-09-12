import { TestBed, inject } from '@angular/core/testing';

import { SocialServiceService } from './social-service.service';

describe('SocialServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialServiceService]
    });
  });

  it('should be created', inject([SocialServiceService], (service: SocialServiceService) => {
    expect(service).toBeTruthy();
  }));
});
