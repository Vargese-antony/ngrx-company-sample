// Angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Rxjs imports
import { Observable } from 'rxjs/Observable';

// Ngrx imports
import { Store } from '@ngrx/store';

// Application imports
import { ICompany } from '../company.modal';
import * as CompanyState from '../../state-management/states/company.state';
import * as CompanyActions from '../../state-management/actions/company.actions';
import { AppStates  } from '../../state-management/states/app.state';
import { DeleteCompanyAction } from '../../state-management/actions/company.actions';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<ICompany[]>;

  constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private _store: Store<AppStates>
    ) { }

  ngOnInit() {
    this.loadCompanies();
    this.companies$ = this._store.select(state => state.companyState.companies);
  }

  loadCompanies() {
    this._store.dispatch(new CompanyActions.LoadCompaniesAction());
  }

  onDelete(id: number) {
    this._store.dispatch(new DeleteCompanyAction(id));
  }
}
