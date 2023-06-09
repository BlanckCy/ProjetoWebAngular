import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './Principal/principal.component';
import { ProdutoComponent } from './Produto/produto.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'produto', component: ProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
