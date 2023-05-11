import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  products: { name: string; desc: string; }[] = [];
  constructor(){
  }

  ngOnInit(): void {
    //AQUI É O INICIO DA EXECUÇÃO DAS FUNÇÕES
    this.products = this.getProducts();
  }


  getProducts() {
  const products: { name: string; desc: string; }[] = [
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
      {
        desc: "descrição",
        name: 'Tim'
      },
    ]

    return products;
  }
}
