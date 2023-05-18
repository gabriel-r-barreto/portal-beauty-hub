import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { GerenciadorProdutosComponent } from './gerenciador-produtos/gerenciador-produtos.component';


const routes: Routes = [
  { path: '', component: LoginComponent , pathMatch: 'full' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'gerenciadorProdutos', component: GerenciadorProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
