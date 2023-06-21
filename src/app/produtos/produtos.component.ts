import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { GerenciadorProdutosComponent } from '../gerenciador-produtos/gerenciador-produtos.component';
import { ProdutosService } from '../services/produtos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  products: any;

currentPage = 1;
pageSize = 10; // Número de produtos por página
totalItems: number;

  constructor(private _ProdutosService: ProdutosService, private  _AppComponent: AppComponent, public dialog: MatDialog) {
     // Inicialize sua lista de produtos
     this.products = []; // Sua lista de produtos a serem exibidos
     this.totalItems = this.products.length;
  }

  ngOnInit(): void {
    localStorage.setItem('Logado', 'true');
    this._AppComponent.ngOnInit();
    //AQUI É O INICIO DA EXECUÇÃO DAS FUNÇÕES
    this.products = this.getProducts();
  }

  getProducts() {
    // const products: { id: number,  name: string; categoria: string; desc: string }[] = [
    //   {
    //     id: 1,
    //     desc: 'descrição 1',
    //     categoria: 'categoria 1',
    //     name: 'Esmalte 1',
    //   },
    //   {
    //     id: 2,
    //     desc: 'descrição 2',
    //     categoria: 'categoria 2',
    //     name: 'Esmalte 2',
    //   },
    //   {
    //     id: 3,
    //     desc: 'descrição 3',
    //     categoria: 'categoria 3',
    //     name: 'Esmalte 3',
    //   },
    //   {
    //     id: 4,
    //     desc: 'descrição 4',
    //     categoria: 'categoria 4',
    //     name: 'Esmalte 4',
    //   },
    //   {
    //     id: 5,
    //     desc: 'descrição 5',
    //     categoria: 'categoria 5',
    //     name: 'Esmalte 5',
    //   },
    //   {
    //     id: 6,
    //     desc: 'descrição 6',
    //     categoria: 'categoria 6',
    //     name: 'Esmalte 6',
    //   },
    //   {
    //     id: 7,
    //     desc: 'descrição 7',
    //     categoria: 'categoria 7',
    //     name: 'Esmalte 7',
    //   },
    //   {
    //     id: 8,
    //     desc: 'descrição 8',
    //     categoria: 'categoria 8',
    //     name: 'Esmalte 8',
    //   },
    //   {
    //     id: 9,
    //     desc: 'descrição 9',
    //     categoria: 'categoria 9',
    //     name: 'Esmalte 9',
    //   },
    //   {
    //     id: 10,
    //     desc: 'descrição 0',
    //     categoria: 'categoria 0',
    //     name: 'Esmalte 0',
    //   },
    //   {
    //     id: 1,
    //     desc: 'descrição 1',
    //     categoria: 'categoria 1',
    //     name: 'Esmalte 1',
    //   },
    //   {
    //     id: 2,
    //     desc: 'descrição 2',
    //     categoria: 'categoria 2',
    //     name: 'Esmalte 2',
    //   },
    //   {
    //     id: 3,
    //     desc: 'descrição 3',
    //     categoria: 'categoria 3',
    //     name: 'Esmalte 3',
    //   },
    //   {
    //     id: 4,
    //     desc: 'descrição 4',
    //     categoria: 'categoria 4',
    //     name: 'Esmalte 4',
    //   },
    //   {
    //     id: 5,
    //     desc: 'descrição 5',
    //     categoria: 'categoria 5',
    //     name: 'Esmalte 5',
    //   },
    //   {
    //     id: 6,
    //     desc: 'descrição 6',
    //     categoria: 'categoria 6',
    //     name: 'Esmalte 6',
    //   },
    //   {
    //     id: 7,
    //     desc: 'descrição 7',
    //     categoria: 'categoria 7',
    //     name: 'Esmalte 7',
    //   },
    //   {
    //     id: 8,
    //     desc: 'descrição 8',
    //     categoria: 'categoria 8',
    //     name: 'Esmalte 8',
    //   },
    //   {
    //     id: 9,
    //     desc: 'descrição 9',
    //     categoria: 'categoria 9',
    //     name: 'Esmalte 9',
    //   },
    //   {
    //     id: 10,
    //     desc: 'descrição 10',
    //     categoria: 'categoria 10',
    //     name: 'Esmalte 10',
    //   },
    // ];

    this._ProdutosService.produtos().subscribe(data => {
      this.products = data;
    })
  
  }

  deleteProducts(id: number){
    this._ProdutosService.deleteProdutos(id).subscribe(data => {
      // this.products = data;
      Swal.fire(
        'Produto Removido!',
        'Produto foi removido com sucesso',
        'success'
      )

      this.getProducts();
    })
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


  closeModal(){ 
    this.dialog.closeAll;
  }

  editar(Product: any){
    const dialogRef = this.dialog.open(GerenciadorProdutosComponent, {
      height: '400px',
      width: '800px',
      data: { produto: Product },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
