import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscaChaveiro',
  templateUrl: './buscaFunko.component.html',
  styleUrls: ['./buscaFunko.component.css']
})

export class BuscaFunkoComponent {


  FunkoDeadpool = 'assets/funko_deadpool.png';
  FunkoCoraline = 'assets/funko_coraline.png';
  FunkoCruela = 'assets/funko_cruela.png';  
  FunkoLoki = 'assets/funko_loki.png';
  FunkoMerida = 'assets/funko_merida.png'; 


  constructor(private router: Router) {}

  
  navigateToFunkoDeadpool() {
    this.router.navigate(['/descricao-deadpool']); 
  }
  navigateToFunkoCoraline() {
    this.router.navigate(['/descricao-coraline']); 
  }
  navigateToFunkoCruela() {
    this.router.navigate(['/descricao-cruela']); 
  }
  navigateToFunkoLoki() {
    this.router.navigate(['/descricao-loki']); 
  }
  navigateToFunkoMerida() {
    this.router.navigate(['/descricao-merida']); 
  }

}