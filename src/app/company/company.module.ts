import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  CompanyListComponent,
  CompanyAddComponent
} from './index';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListResolveService } from './company-list/company-list-resolve.service';
import { CompanyService } from './company.service';
import { CompanyDetailResolveService } from './company-add/company-detail-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ],
  declarations: [
    CompanyListComponent,
    CompanyAddComponent
  ],
  providers: [
    CompanyService,
    CompanyListResolveService,
    CompanyDetailResolveService
  ]
})
export class CompanyModule { }
