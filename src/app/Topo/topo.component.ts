import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {
  logo = 'assets/logo.png';
  iconUser = 'assets/icon-user.png';
  iconCar = 'assets/icon-carrinho.png';
  txtBusca: string = '';

  loading = false;

  constructor(private router: Router) {}

  validarBusca(){
    if(this.txtBusca.toLowerCase() == "caneca"){      
      this.loading = true;
      setTimeout(() => {
        this.router.navigateByUrl('/buscaCaneca').then(() => {
          this.loading = false;
        });
      }, 1000);      
    }
    if(this.txtBusca.toLowerCase() == "funko"){      
      this.loading = true;
      setTimeout(() => {
        this.router.navigateByUrl('/buscaFunko').then(() => {
          this.loading = false;
        });
      }, 1000);      
    }
    if(this.txtBusca.toLowerCase() == "chaveiro"){      
      this.loading = true;
      setTimeout(() => {
        this.router.navigateByUrl('/buscaChaveiro').then(() => {
          this.loading = false;
        });
      }, 1000);      
    }
  }

  navigateToProduto() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/produto').then(() => {
        this.loading = false;
      });
    }, 1000);
  }

  navigateToLogin() {
    this.txtBusca = '';
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/login').then(() => {
        this.loading = false;
      });
    }, 1000);
  }

  navigateToHome() {
    this.txtBusca = '';
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('').then(() => {
        this.loading = false;
      });
    }, 1000);    
  }

  navigateToCarrinho() {
    this.txtBusca = '';
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/carrinho').then(() => {
        this.loading = false;
      });
    }, 1000);  
  }
}
