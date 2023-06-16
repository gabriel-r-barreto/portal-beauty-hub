import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosService } from '../services/produtos.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutosComponent } from '../produtos/produtos.component';



class ImageSnippet {
  constructor(public src: string, public file: File) {}
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: number }, private _ProdutosService: ProdutosService, private formBuilder: FormBuilder,
  private _ProdutosComponent: ProdutosComponent) {
  }


  ngOnInit() {

    if (this.data){
      this.createForm()
      this.getCategoria();
      let dados: any = this.data.id
      this.id = this.data.id;
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


  closeModal(){
    this._ProdutosComponent.closeModal()
  }



  criarProduto(){
      console.log(this.formCliente.value)

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
        console.log(data);
      })

    }


}
