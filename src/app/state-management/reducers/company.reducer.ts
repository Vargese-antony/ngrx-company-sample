import { ActionReducerMap } from '@ngrx/store';

import { ICompany } from '../../company/company.modal';
import * as CompanyActions from '../actions/company.actions';
import * as CompanyState from '../states/company.state';
import { AppStates } from '../states/app.state';

// Reducer factory to inject the reducers to the StoreModule
export const companyReducers: ActionReducerMap<AppStates> = {
    companyState : reducer
};

// Reducer for Company
function reducer( state = CompanyState.initialState, action: CompanyActions.Actions): CompanyState.State {
    console.log('reducer actions', action.type);
    switch (action.type) {
        case CompanyActions.LOAD_COMPANIES_SUCCESS: {
            return state = {
                companies: action.payload
            };
        }
        case CompanyActions.DELETE_COMPANY_SUCCESS: {
            return state = {
                companies: state.companies.filter( c => c.id !== action.payload.id)
            };
        }
        default:
            return state;

    }
}
