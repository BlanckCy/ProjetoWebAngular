import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './Principal/principal.component';
import { ProdutoComponent } from './Produto/produto.component';
// import { DescricaofunkoComponent } from './descricaofunko/descricaofunko.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'produto', component: ProdutoComponent },
  // { path: 'produto-chaveiro', component:DescricaofunkoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
