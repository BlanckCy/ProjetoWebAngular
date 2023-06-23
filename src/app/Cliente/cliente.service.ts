import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http : HttpClient) {}

  public insert(obj : ClienteModel) : string{    
    let mensagem = "";
    this.http.post<String>("http://localhost:8070/api/cliente/insert/", obj).subscribe({
      next: data =>
      {
        mensagem = "Registro salvo com sucesso!";
      },
      error: error => {
        console.log(error);
        mensagem = "Ocorreu um erro durante a inserção de dados!";
      }
    });    
    return mensagem;
  }

  public update(obj: ClienteModel): string{
    let mensagem = "";
    this.http.put<String>("http://localhost:8070/api/cliente/update/", obj).subscribe({
      next: data =>
      {
        mensagem = "Registro alterado com sucesso!";
      },
      error: error => {
        console.log(error);
        mensagem = "Ocorreu um erro durante o update!";
      }
    });    
    return mensagem;
  } 

  public delete(obj: ClienteModel) :string{    
    let mensagem = "";
    this.http.delete<String>("http://localhost:8070/api/cliente/delete/"+ obj.idcliente+"/").subscribe({
      next: data =>
      {
        mensagem = "Registro deletado com sucesso!";
      },
      error: error => {
        console.log(error);
        mensagem = "Ocorreu um erro durante a exclusão!";
      }
    });    
    return mensagem;   
  } 
  
  public loadinfo(codigo: Number): Observable<ClienteModel>{
    return this.http.get<ClienteModel>("http://localhost:8070/api/cliente/loadinfo/"+codigo+"/");         
  }

  public listar() :  Observable<ClienteModel[]>{    
    return this.http.get<ClienteModel[]>("http://localhost:8070/api/cliente/loadinfo/");      
  }

/*   public verificarLogin(obj: ClienteModel) : String{
    let mensagem = '';
    this.http.post<String>("http://localhost:8070/api/cliente/login/", obj).subscribe({
      next: data =>
      {
        mensagem = "Registro salvo com sucesso!";
      },
      error: error => {
        console.log(error);
        mensagem = "Ocorreu um erro durante a inserção de dados!";
      }
    });    
    return mensagem;
  }
} */
public verificarLogin(obj: ClienteModel): string {
  let mensagem = '';

  // Preencha os dados de email e senha no objeto 'obj'
  obj.email = 'seu_email';
  obj.senha = 'sua_senha';

  this.http.post<string>("http://localhost:8070/api/cliente/login/", obj).subscribe({
    next: data => {
      mensagem = "Registro salvo com sucesso!";
    },
    error: error => {
      console.log(error);
      mensagem = "Ocorreu um erro durante a inserção de dados!";
    }
  });

  return mensagem;
}
}
