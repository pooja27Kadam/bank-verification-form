import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { TabledataService } from '../service/tabledata.service';

@Component({
  selector: 'app-iftverification',
  templateUrl: './iftverification.component.html',
  styleUrls: ['./iftverification.component.css'],
})
export class IftverificationComponent {
  // tableInformation: Array<any> = [];
  dataRecord = [];
  constructor(
    private _http: HttpClient,
    private route: Router,
    private tabledata: TabledataService
  ) {}

  ngOnInit() {
    this.tabledata.getAllTableData().subscribe((res: any) => {
      this.dataRecord = res;
    });
  }

  getForm(id: string) {
    this.route.navigate(['signatureverificationform/' + id]);
  }
}
