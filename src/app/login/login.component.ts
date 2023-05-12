import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(private router: Router, private _AppComponent: AppComponent, private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    localStorage.setItem("Logado", "false");
    this._AppComponent.ngOnInit()
    this.createForms();


  }


  createForms(){
    this.form = this.formBuilder.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required]
    });
  }


  login(){
    this.router.navigate(['produtos']);
  }

}
