import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ICompany } from '../company.modal';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {
  title = 'Add new Company';
  id: number;
  company: ICompany;

  name: FormControl;
  email: FormControl;
  phone: FormControl;
  companyFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
      private _activatedRoute: ActivatedRoute,
      private _companyService: CompanyService,
      private _router: Router
    ) {
    this.createForm();
  }

  ngOnInit() {
    this.company = this._activatedRoute.snapshot.data['companyDetailFromResolve'];
    if (this.company) {
      // Edit form
      this.title = 'Edit company ' + this.company.name;
      this.id = this.company.id;
      this.companyFormGroup.setValue({
        name : this.company.name,
        email : this.company.email,
        phone : this.company.phone
      });
    }
  }

  private createForm() {
    this.name = this._formBuilder.control('', Validators.required);
    this.email = this._formBuilder.control('', Validators.required);
    this.phone = this._formBuilder.control('');

    this.companyFormGroup = this._formBuilder.group({
      name : this.name,
      email : this.email,
      phone : this.phone
    });
  }

  onSubmit(formValue) {
    console.log('onSubmit', this.companyFormGroup.value);
    const company: ICompany = {
      id : this.id || 0,
      name : this.name.value,
      email : this.email.value,
      phone : this.phone.value
    };
    if (this.id) {
      this._companyService.editCompany(company).subscribe( (response: any) => {
        this._router.navigate(['/company/list']);
      });
    } else {
      this._companyService.addCompany(company).subscribe( (response: any) => {
        this._router.navigate(['/company/list']);
      });
    }
  }

}
