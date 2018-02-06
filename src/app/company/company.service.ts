import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ICompany } from './company.modal';

@Injectable()
export class CompanyService {
    private API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

    constructor( private _http: HttpClient) {}

    getCompanies(): Observable<ICompany[]> {
        return this._http.get( this.API_BASE + '/company')
            .catch(this.handleError);
    }

    getCompany(id: number): Observable<ICompany> {
        return this._http.get(this.API_BASE + `/company/${id}`)
            .catch(this.handleError);
    }

    deleteCompany(id: number): Observable<any> {
        console.log('deleteCompany');
        return this._http.delete( this.API_BASE + `/company/${id}`)
            .do( res => console.log(res))
            .catch(this.handleError);
    }

    addCompany(company: any): Observable<any> {
        console.log('addCompany', company);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        return this._http.post( this.API_BASE + '/company', company, { headers : httpHeaders})
            .do( res => console.log(res))
            .catch(this.handleError);
    }

    editCompany(company: any): Observable<any> {
        console.log('editCompany', company);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        return this._http.put( this.API_BASE + `/company/${company.id}`, company, { headers : httpHeaders})
            .do( res => console.log(res))
            .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        console.error(error.statusText);
        return Observable.throw(error.statusText);
    }
}
