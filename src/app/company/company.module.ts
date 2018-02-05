import { NgModule } from '@angular/core';

import {
  CompanyListComponent,
  CompanyDeleteComponent,
  CompanyAddComponent
} from './index';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [
    CompanyRoutingModule
  ],
  declarations: [
    CompanyListComponent,
    CompanyDeleteComponent,
    CompanyAddComponent
  ]
})
export class CompanyModule { }
