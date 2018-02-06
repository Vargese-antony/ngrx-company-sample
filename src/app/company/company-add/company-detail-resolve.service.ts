import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CompanyService } from '../company.service';

@Injectable()
export class CompanyDetailResolveService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot) {
    const id = +route.paramMap.get('id');
    return this._companyService.getCompany(id);
  }

  constructor(private _companyService: CompanyService) { }

}
