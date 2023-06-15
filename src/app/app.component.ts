import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  logado: string | null | undefined;
  
  
  constructor(){

  }
  
  
  ngOnInit(): void {
    this.logado = localStorage.getItem("Logado")
    console.log(this.logado)
  }
}
