import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as CompanyActions from '../actions/company.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { CompanyService } from '../../company/company.service';

@Injectable()
export class CompanyEffects {
    constructor(
        private _companyService: CompanyService,
        private actions$: Actions
    ) {}

    @Effect() loadCompanies$ = this.actions$
        .ofType(CompanyActions.LOAD_COMPANIES)
        .switchMap(() => this._companyService.getCompanies())
        .map( companies => new CompanyActions.LoadCompaniesSuccessAction(companies));

    @Effect() deleteCompany$ = this.actions$
        .ofType(CompanyActions.DELETE_COMPANY)
        .switchMap((action: CompanyActions.DeleteCompanyAction ) => this._companyService.deleteCompany(action.payload))
        .map( company => new CompanyActions.DeleteCompanySuccessAction(company));
}
