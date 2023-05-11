import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  logado: string | null | undefined;
  
  
  constructor(){

  }
  
  
  ngOnInit(): void {
    this.logado = localStorage.getItem("Logado")
  }

}
