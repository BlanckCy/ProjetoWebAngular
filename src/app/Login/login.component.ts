import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../Cliente/cliente.service';
import { ClienteModel } from '../Cliente/cliente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public model: ClienteModel = new ClienteModel();

  constructor(private clienteService: ClienteService, private router: Router) {}

  navigateToCadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  verificarlogin() {
    this.clienteService.verificarLogin(this.model.email, this.model.senha).subscribe(
      (data: ClienteModel) => {     
        if (data.email != null) {
          alert("Login Ok")
        } else {
          alert('Login inválido');
        }  
      }, 
      (error) => {
        console.error('Erro ao verificar login:', error);
      }
    ) 
  }

}
