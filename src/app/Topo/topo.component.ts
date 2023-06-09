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

  constructor(private router: Router) {}

  navigateToCliente() {
    this.router.navigate(['/cliente']); 
  }

  navigateToProdutoo() {
    this.router.navigateByUrl('/produto');
  }
}
