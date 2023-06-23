import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
   
    constructor(private router: Router) {}


    navigateToLogin() {
      this.router.navigateByUrl('/login');
    }
  }

