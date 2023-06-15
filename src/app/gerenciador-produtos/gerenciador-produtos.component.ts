import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-gerenciador-produtos',
  templateUrl: './gerenciador-produtos.component.html',
  styleUrls: ['./gerenciador-produtos.component.scss']
})
export class GerenciadorProdutosComponent implements OnInit {
  categorias: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: number }, private _ProdutosService: ProdutosService) {
  }


  ngOnInit() {
    this.getCategoria();
  }

  getCategoria(){
    this._ProdutosService.categorias().subscribe(data => {
      console.log(data);
      this.categorias = data;
    })
  }


}
