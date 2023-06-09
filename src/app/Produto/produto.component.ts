import { Component } from '@angular/core';
import { ProdutoModel } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  public mensagem : string = "";
  public model : ProdutoModel = new ProdutoModel();
  public lista: ProdutoModel[] = [];
  
  constructor(private service: ProdutoService) {
    this.listar();
  }

  public insert(){
    this.service.insert(this.model);
    this.mensagem = "registro inserido com sucesso!";    
  }
  public update(){
    this.service.update(this.model);
    this.mensagem = "registro alterado com sucesso!"
  }
  public delete(){
    this.service.delete(this.model);
    this.mensagem = "registro removido com sucesso!";
  }
  public loadinfo(){
    this.mensagem = "";
    this.service.loadinfo(this.model.idproduto).subscribe(
      (data: ProdutoModel) => {            
        this.model.categoria = data.categoria;
        this.model.descricao = data.descricao;
        this.model.nome = data.nome;
        this.model.quantidade = data.quantidade;
        this.model.valor = data.valor;
        if(this.model.nome==null){
          this.mensagem = "Registro não encontrado!";
        }
      } , 
      (error) => {
        this.mensagem = "ocorreu um erro no carregamento!"+ error;
      }
    )       

  }
  public listar(){
    this.service.listar().subscribe(
      (data: ProdutoModel[]) => {            
        this.lista = data;      
      } , 
      (error) => {
        this.mensagem = "ocorreu um erro no carregamento da listagem!"+JSON.stringify(error);
      }
    )       
  }

}
