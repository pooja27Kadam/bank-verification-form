import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TabledataService {
  [x: string]: any;

  constructor(private http: HttpClient) {}

  getAllTableData() {
    return this.http.get(' http://localhost:3000/data').pipe(
      map((res) => {
        const tableInformation = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            tableInformation.push({ ...res[key] });
          }
        }
        console.log(tableInformation);
        return tableInformation;
      })
    );
  }

  getTableDataById(id: string) {
    const query = '?id=' + id;
    return this.http.get('http://localhost:3000/data' + query).pipe(
      map((res) => {
        const tableInformation = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            tableInformation.push({ ...res[key] });
          }
        }
        return tableInformation;
      })
    );
  }
}
