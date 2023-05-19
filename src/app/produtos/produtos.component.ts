import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { GerenciadorProdutosComponent } from '../gerenciador-produtos/gerenciador-produtos.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  products: { name: string; desc: string; }[] = [];
  constructor(private _AppComponent: AppComponent, public dialog: MatDialog){
  }

  ngOnInit(): void {
    localStorage.setItem("Logado", "true");
    this._AppComponent.ngOnInit()
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


  teste(){
    const dialogRef = this.dialog.open(GerenciadorProdutosComponent,{
      height: '500px',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

