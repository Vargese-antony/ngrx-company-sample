import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path : 'welcome', component : WelcomeComponent},
  { path : 'company' , loadChildren : 'app/company/company.module#CompanyModule'},
  { path : '', redirectTo : 'welcome', pathMatch : 'full'},
  { path : '**', component : WelcomeComponent, pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
