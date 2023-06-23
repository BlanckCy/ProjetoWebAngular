import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './Principal/principal.component';
import { ProdutoComponent } from './Produto/produto.component';
import { CadastroComponent } from './Cadastro/cadastro.component';
import { LoginComponent } from './Login/login.component';
import { BuscaCanecaComponent } from './buscaCaneca/buscaCaneca.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buscaCaneca', component: BuscaCanecaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
