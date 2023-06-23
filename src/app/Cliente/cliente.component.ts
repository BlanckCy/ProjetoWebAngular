import { Component } from '@angular/core';
import { ClienteModel } from '../Cliente/cliente.model';
import { ClienteService } from '../Cliente/cliente.service';

@Component({
  selector: 'app-Cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  public mensagem : string = "";
  public model : ClienteModel = new ClienteModel();
  public lista: ClienteModel[] = [];
  
  constructor(private service: ClienteService) {
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
    this.service.loadinfo(this.model.idcliente).subscribe(
      (data: ClienteModel) => {            
        this.model.idcliente = data.idcliente;
        this.model.nome = data.nome;
        this.model.email = data.email;
        this.model.senha = data.senha;
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
      (data: ClienteModel[]) => {            
        this.lista = data;      
      } , 
      (error) => {
        this.mensagem = "ocorreu um erro no carregamento da listagem!"+JSON.stringify(error);
      }
    )       
  }

}
