import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CompanyListComponent,
  CompanyListResolveService,
  CompanyAddComponent,
  CompanyDetailResolveService
} from './index';

const routes: Routes = [
  { path: 'list', resolve : {companyListFromResolve: CompanyListResolveService}, component : CompanyListComponent},
  { path: 'add', component : CompanyAddComponent},
  { path: 'edit/:id', resolve : {companyDetailFromResolve : CompanyDetailResolveService}, component : CompanyAddComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class CompanyRoutingModule { }
