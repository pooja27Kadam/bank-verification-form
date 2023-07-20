import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;
  constructor(private _http: HttpClient, private _route: Router) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      fname: new FormControl(),
      password: new FormControl(),
    });
  }
  logindata(login: FormGroup) {
    // console.log(this.login.value);
    const query = `?fname=${this.login.value.fname}&password=${this.login.value.password}`;

    this._http.get<any>('http://localhost:3000/users' + query).subscribe(
      (res) => {
        if (res.length) {
          alert('you are successfully login');
          this.login.reset();
          //document.querySelector('.form-box').css('display', 'none');
          this._route.navigate(['signature-verification']);
        } else {
          alert('User Not Found');
          this._route.navigate(['login']);
        }
      },
      (err) => {
        alert('Something was wrong');
      }
    );
  }
}
