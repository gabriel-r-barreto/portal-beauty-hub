import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { GerenciadorProdutosComponent } from '../gerenciador-produtos/gerenciador-produtos.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  products: { name: string; categoria: string; desc: string }[] = [];
  constructor(private _AppComponent: AppComponent, public dialog: MatDialog) {}

  ngOnInit(): void {
    localStorage.setItem('Logado', 'true');
    this._AppComponent.ngOnInit();
    //AQUI É O INICIO DA EXECUÇÃO DAS FUNÇÕES
    this.products = this.getProducts();
  }

  getProducts() {
    const products: { name: string; categoria: string; desc: string }[] = [
      {
        desc: 'descrição 1',
        categoria: 'categoria 1',
        name: 'Esmalte 1',
      },
      {
        desc: 'descrição 2',
        categoria: 'categoria 2',
        name: 'Esmalte 2',
      },
      {
        desc: 'descrição 3',
        categoria: 'categoria 3',
        name: 'Esmalte 3',
      },
      {
        desc: 'descrição 4',
        categoria: 'categoria 4',
        name: 'Esmalte 4',
      },
      {
        desc: 'descrição 5',
        categoria: 'categoria 5',
        name: 'Esmalte 5',
      },
      {
        desc: 'descrição 6',
        categoria: 'categoria 6',
        name: 'Esmalte 6',
      },
      {
        desc: 'descrição 7',
        categoria: 'categoria 7',
        name: 'Esmalte 7',
      },
      {
        desc: 'descrição 8',
        categoria: 'categoria 8',
        name: 'Esmalte 8',
      },
      {
        desc: 'descrição 9',
        categoria: 'categoria 9',
        name: 'Esmalte 9',
      },
      {
        desc: 'descrição 0',
        categoria: 'categoria 0',
        name: 'Esmalte 0',
      },
    ];

    return products;
  }

  teste() {
    const dialogRef = this.dialog.open(GerenciadorProdutosComponent, {
      height: '400px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
