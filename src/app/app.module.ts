import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
// import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './Produto/produto.component';

import { AppComponent } from './app.component';
import { TopoComponent } from './Topo/topo.component';
import { FooterComponent } from './Footer/footer.component';
import { MenuComponent } from './Menu/menu.component';
import { PrincipalComponent } from './Principal/principal.component';
// import { DescricaofunkoComponent } from './descricaofunko/descricaofunko.component';
import { DescricaochaveiroComponent } from './descricaochaveiro/descricaochaveiro.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    FooterComponent,
    MenuComponent,
    PrincipalComponent,
    // UsuarioComponent,
    ProdutoComponent,
    // DescricaofunkoComponent,
    DescricaochaveiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
