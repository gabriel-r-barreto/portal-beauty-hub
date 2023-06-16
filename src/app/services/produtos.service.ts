import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }


  produtos(){
    return this.http.get("https://api-beauty-hub-production.up.railway.app/products")
  }


  categorias(){
    return this.http.get("https://api-beauty-hub-production.up.railway.app/category")
  }

  criarProdutos(obj: any){
    return this.http.post("https://api-beauty-hub-production.up.railway.app/products", obj)
  }

  putProdutos(id: number, obj: any){
    return this.http.put("https://api-beauty-hub-production.up.railway.app/products/"+id, obj)
  }

}
