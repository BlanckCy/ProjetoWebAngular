import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoModel } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(private http : HttpClient) {}

  public insert(obj : ProdutoModel) : string{    
    let mensagem = "";
    this.http.post<String>("http://localhost:8090/api/produto/insert/", obj).subscribe({
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

  public update(obj: ProdutoModel): string{
    let mensagem = "";
    this.http.put<String>("http://localhost:8090/api/produto/update/", obj).subscribe({
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

  public delete(obj: ProdutoModel) :string{    
    let mensagem = "";
    this.http.delete<String>("http://localhost:8090/api/produto/delete/"+ obj.idproduto+"/").subscribe({
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
  
  public loadinfo(codigo: Number): Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>("http://localhost:8090/api/produto/loadinfo/"+codigo+"/");         
  }

  public listar() :  Observable<ProdutoModel[]>{    
    return this.http.get<ProdutoModel[]>("http://localhost:8090/api/produto/loadinfo/");      
  }
  
}
