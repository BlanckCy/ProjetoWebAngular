import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscaChaveiro',
  templateUrl: './buscaChaveiro.component.html',
  styleUrls: ['./buscaChaveiro.component.css']
})

export class BuscaChaveiroComponent {


  ChaveiroBatman = 'assets/chaveiro_batman.png';
  ChaveiroDragon = 'assets/chaveiro_dragonball.png';
  ChaveiroGroot = 'assets/chaveiro_groot.png';  
  ChaveiroNaruto = 'assets/chaveiro_naruto.png';
  ChaveiroStarWars = 'assets/chaveiro_starwars.png'; 


  constructor(private router: Router) {}

  
  navigateToChaveiroBatman() {
    this.router.navigate(['/descricao-batman']); 
  }
  navigateToChaveiroDragon() {
    this.router.navigate(['/descricao-dragon']); 
  }
  navigateToChaveiroGroot() {
    this.router.navigate(['/descricao-groot']); 
  }
  navigateToChaveiroNaruto() {
    this.router.navigate(['/descricao-naruto']); 
  }
  navigateToChaveiroStarWars() {
    this.router.navigate(['/descricao-star-wars']); 
  }  

}