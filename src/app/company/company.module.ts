import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Ngrx imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { companyReducers } from '../state-management/reducers/company.reducer';
import { CompanyEffects } from '../state-management/effects/company.effects';

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
    CompanyRoutingModule,
    StoreModule.forRoot(companyReducers),
    EffectsModule.forRoot([CompanyEffects]),
    StoreDevtoolsModule.instrument()
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
