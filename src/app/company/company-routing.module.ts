import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  CompanyListComponent,
  CompanyAddComponent,
  CompanyDeleteComponent
} from './index';

const routes: Routes = [
  { path: 'list', component : CompanyListComponent},
  { path: 'add', component : CompanyAddComponent},
  { path: 'delete', component : CompanyDeleteComponent},
  { path: 'edit', component : CompanyAddComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class CompanyRoutingModule { }
