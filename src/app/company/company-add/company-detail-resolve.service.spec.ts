import { TestBed, inject } from '@angular/core/testing';

import { CompanyDetailResolveService } from './company-detail-resolve.service';

describe('CompanyDetailResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyDetailResolveService]
    });
  });

  it('should be created', inject([CompanyDetailResolveService], (service: CompanyDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
