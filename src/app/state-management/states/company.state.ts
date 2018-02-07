import { ICompany } from '../../company/company.modal';


export interface State {
    companies: ICompany[];
}

export const initialState: State = {
    companies : []
};

