import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';

import { ICompany } from '../company.modal';
import { CompanyService } from '../company.service';

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
      private _companyService: CompanyService
    ) { }

  ngOnInit() {
    // this.companies = this._activatedRoute.snapshot.data['companyListFromResolve'];
    this._activatedRoute.data.forEach( data => {
      this.companies$ = Observable.of(data['companyListFromResolve']);
      console.log('ngOnInit', this.companies$);
      //console.log('Inside ngOnInit');
    });
  }

  onDelete(id: number) {
    this._companyService.deleteCompany(id)
      .subscribe( res => {
        console.log('Company deleted');
        // this._router.navigate(['/company/list']);
      });
  }
}
