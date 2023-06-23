import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './Principal/principal.component';
import { ProdutoComponent } from './Produto/produto.component';
import { CadastroComponent } from './Cadastro/cadastro.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
