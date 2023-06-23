import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscaCaneca',
  templateUrl: './buscaCaneca.component.html',
  styleUrls: ['./buscaCaneca.component.css']
})

export class BuscaCanecaComponent {
  CanecaBabyYoda = 'assets/caneca_baby_yoda.png';
  CanecaSuperMan = 'assets/caneca_superman.png';
  CanecaChihiro = 'assets/caneca_chihiro.png';
  CanecaDumbo = 'assets/caneca_dumbo.png';
  CanecaCapitaoMarvel = 'assets/caneca_captao_marvel.png';
  CanecaSailorMoon = 'assets/caneca_sailormoon.png';  


  constructor(private router: Router) {}

  
  navigateToCanecaBabyYoda() {
    this.router.navigate(['/descricao-baby-yoda']); 
  }

  navigateToCanecaSuperMan() {
    this.router.navigate(['/descricao-superman']); 
  }

  navigateToCanecaChihiro() {
    this.router.navigate(['/descricao-chihiro']); 
  }

  navigateToCanecaDumbo() {
    this.router.navigate(['/descricao-dumbo']); 
  }

  navigateToanecaCapitaoMarvel() {
    this.router.navigate(['/descricao-captao-marvel']); 
  }

  navigateToCanecaSailorMoon() {
    this.router.navigate(['/descricao-sailor-moon']); 
  }
 
}

