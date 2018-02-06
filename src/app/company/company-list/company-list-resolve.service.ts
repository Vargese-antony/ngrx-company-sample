import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { CompanyService } from '../company.service';
import { ICompany } from '../company.modal';

@Injectable()
export class CompanyListResolveService implements Resolve<ICompany[]> {

  resolve(route: ActivatedRouteSnapshot) {
    return this._companyService.getCompanies();
  }

  constructor(private _companyService: CompanyService) {}

}
