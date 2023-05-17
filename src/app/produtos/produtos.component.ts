import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  products: { name: string; categoria:string; desc: string; }[] = [];
  constructor(private _AppComponent: AppComponent){
  }

  ngOnInit(): void {
    localStorage.setItem("Logado", "true");
    this._AppComponent.ngOnInit()
    //AQUI É O INICIO DA EXECUÇÃO DAS FUNÇÕES
    this.products = this.getProducts();
  }


  getProducts() {
  const products: { name: string; categoria:string; desc: string; }[] = [
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
      {
        desc: "descrição",
        categoria:'categoria',
        name: 'Esmalte'
      },
    ]

    return products;
  }
}
