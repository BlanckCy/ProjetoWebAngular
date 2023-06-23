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

  loading = false;

  constructor(private router: Router) {}

  navigateToProduto() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/produto').then(() => {
        this.loading = false;
      });
    }, 1000);
  }

  navigateToLogin() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/login').then(() => {
        this.loading = false;
      });
    }, 1000);
  }

  navigateToHome() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('').then(() => {
        this.loading = false;
      });
    }, 1000);    
  }

  navigateToCarrinho() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/carrinho').then(() => {
        this.loading = false;
      });
    }, 1000);  
  }
}
