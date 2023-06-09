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
import { ClienteComponent } from './Cliente/cliente.component';
import { LoginComponent } from './Login/login.component';
import { BuscaCanecaComponent } from './buscaCaneca/buscaCaneca.component';


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
    DescricaochaveiroComponent,
    ClienteComponent,
    LoginComponent,
    BuscaCanecaComponent
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
