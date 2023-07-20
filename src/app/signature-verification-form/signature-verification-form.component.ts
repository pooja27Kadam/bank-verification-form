import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabledataService } from '../service/tabledata.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signature-verification-form',
  templateUrl: './signature-verification-form.component.html',
  styleUrls: ['./signature-verification-form.component.css'],
})
export class SignatureVerificationFormComponent implements OnInit {
  formGroupData: FormGroup;
  formData: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private tabledata: TabledataService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((value) => {
      this.getFormData(value.get('id'));
    });

    this.formGroupData = new FormGroup({
      id: new FormControl(null),
      business_key: new FormControl(null),
      application: new FormControl(null),
      comments: new FormControl(null),
      transaction_currency: new FormControl(null),
      transaction_amount: new FormControl(null),
      amount_in_mur: new FormControl(null),
      debit_account_number: new FormControl(null),
      account_short_name: new FormControl(null),
      debit_account_ccv: new FormControl(null),
      payment_detail_1: new FormControl(null),
      payment_detail_2: new FormControl(null),
      payment_detail_3: new FormControl(null),
      payment_detail_4: new FormControl(null),
      verify: new FormControl(null),
      discrepancy_reason: new FormControl(null),
      created_by: new FormControl(null),
      created_on: new FormControl(null),
      updated_by: new FormControl(null),
      updated_on: new FormControl(null),
      priority: new FormControl(null),
      source_bu: new FormControl(null),
      document_capture_reference: new FormControl(null),
      status: new FormControl(null),
    });
  }

  getFormData(id: string) {
    this.tabledata.getTableDataById(id).subscribe((res: any) => {
      this.formGroupData.patchValue(res[0]);
      // this.formGroupData.disable(); // to disable the form items
      // this.formData = res[0];
    });
  }
}
