import { Action } from '@ngrx/store';
import { ICompany } from '../../company/company.modal';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

// NOT IMPL
export const EDIT_COMPANY_DETAILS = 'EDIT_COMPANY_DETAILS';
export const EDIT_COMPANY_DETAILS_SUCCESS = 'EDIT_COMPANY_DETAILS_SUCCESS';
// NOT IMPL
export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';

export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';

// Action to load the company list
export class LoadCompaniesAction implements Action {
    readonly type = LOAD_COMPANIES;

    constructor() {}
}
// Action once the company list is retrieved
export class LoadCompaniesSuccessAction implements Action {
    readonly type = LOAD_COMPANIES_SUCCESS;

    constructor(public payload: ICompany[]) {}
}

// Action to Delete the company
export class DeleteCompanyAction implements Action {
    readonly type = DELETE_COMPANY;

    constructor(public payload: number) {}
}
// Action once the company is deleted
export class DeleteCompanySuccessAction implements Action {
    readonly type = DELETE_COMPANY_SUCCESS;

    constructor(public payload: ICompany) {}
}


export type Actions = LoadCompaniesAction |
    LoadCompaniesSuccessAction |
    DeleteCompanyAction |
    DeleteCompanySuccessAction;
