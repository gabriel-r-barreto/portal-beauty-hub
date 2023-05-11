import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _AppComponent: AppComponent) {

  }


  ngOnInit(): void {
    localStorage.setItem("Logado", "false");
    this._AppComponent.ngOnInit()


  }


  login(){
    this.router.navigate(['produtos']);
  }

}
