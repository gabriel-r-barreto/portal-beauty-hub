import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosService } from '../services/produtos.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutosComponent } from '../produtos/produtos.component';
import Swal from 'sweetalert2'



class ImageSnippet {
  constructor(public src: string, public file: File) { }
}


@Component({
  selector: 'app-gerenciador-produtos',
  templateUrl: './gerenciador-produtos.component.html',
  styleUrls: ['./gerenciador-produtos.component.scss']
})
export class GerenciadorProdutosComponent implements OnInit {
  categorias: any;
  formCliente: any;
  selectedFile: ImageSnippet | undefined;
  editarAllow: boolean = false;
  id: any;

  constructor(public dialogRef: MatDialogRef<GerenciadorProdutosComponent>, @Inject(MAT_DIALOG_DATA) public data: { produto: any }, private _ProdutosService: ProdutosService, public formBuilder: FormBuilder) {
  }


  ngOnInit() {

    if (this.data){
      this.createForm()
      this.getCategoria();
      let dados: any = this.data.produto
      this.id = this.data.produto.id;
      this.editarAllow = true;
      // this.formCliente.value.pname = dados.pname;
      // this.formCliente.value.descProd = dados.descr;
      // this.formCliente.value.categoriaProd = dados.category_id;
      // this.formCliente.value.quantidade = dados.quantidade;
      // this.formCliente.value.dt_validade = dados.dt_validade  ;

      this.putForm(dados)

    } else {
      this.createForm()
      this.getCategoria();
      this.editarAllow = false;
    }
  }




  createForm() {
    this.formCliente = this.formBuilder.group({
      pname: [null, Validators.required],
      descProd: [null, Validators.required],
      categoriaProd: [null, Validators.required],
      quantidade: [null, Validators.required],
      validade: [null, Validators.required],
      imagem: [null, Validators.required]
    })
  }

  putForm(dados: any) {

    let data = dados.dt_validade.split("T");

    dados.dt_validade = data[0];

    this.formCliente = this.formBuilder.group({
      pname: [dados.pname, Validators.required],
      descProd: [dados.descr, Validators.required],
      categoriaProd: [dados.category_id, Validators.required],
      quantidade: [dados.quantidade, Validators.required],
      validade: [dados.dt_validade, Validators.required],
      // imagem: [null, Validators.required]
    })
  }

  getCategoria() {
    this._ProdutosService.categorias().subscribe(data => {
      // console.log(data);
      this.categorias = data;
    })
  }


  handleImageUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Faça o que quiser com a string Base64, como enviá-la para um servidor
      // console.log(base64String);
      this.formCliente.value.imagem = base64String;
    };

    reader.readAsDataURL(file);
  }

  criarProduto(){
      // console.log(this.formCliente.value)

      let obj = {
        "pname": this.formCliente.value.pname,
        "descr": this.formCliente.value.descProd,
        "category_id": this.formCliente.value.categoriaProd,
        "quantidade": this.formCliente.value.quantidade,
        "dt_validade": this.formCliente.value.validade
      }

      if(this.editarAllow){
        this._ProdutosService.putProdutos(this.id.id, obj).subscribe(data => {
          console.log(data);
        })
      }

      this._ProdutosService.criarProdutos(obj).subscribe(data => {

        Swal.fire(
          'Produto Cadastrado!',
          'Produto foi cadastrado',
          'success'
        )
      },error => {
        Swal.fire(
          'Erro no Cadastrado!',
          'Entre em contato com o suporte',
          'error'
        )
      })

    }

    closeModal() {
      this.dialogRef.close();
    }


}
