import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }


  produtos(){
    return this.http.get("https://api-beauty-hub.vercel.app/products")
  }


  categorias(){
    return this.http.get("https://api-beauty-hub.vercel.app/category")
  }

  criarProdutos(obj: any){
    return this.http.post("https://api-beauty-hub.vercel.app/products", obj)
  }

  putProdutos(id: number, obj: any){
    return this.http.patch("https://api-beauty-hub.vercel.app/products/"+id, obj)
  }

  deleteProdutos(id: number){
    return this.http.delete("https://api-beauty-hub.vercel.app/products/"+id)
  }

}
