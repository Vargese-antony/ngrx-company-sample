import { TestBed, inject } from '@angular/core/testing';

import { CompanyListResolveService } from './company-list-resolve.service';

describe('CompanyListResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyListResolveService]
    });
  });

  it('should be created', inject([CompanyListResolveService], (service: CompanyListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
