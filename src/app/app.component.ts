import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja';

  /* constructor(private router: Router) {}

  navigateToCliente() {
    this.router.navigate(['/cliente']); 
  }

  navigateToProduto() {
    this.router.navigate(['/produto']); 
  } */
}
