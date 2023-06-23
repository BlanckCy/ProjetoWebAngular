import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from '../Produto/produto.model';
import { ProdutoService } from '../Produto/produto.service';

@Component({
  selector: 'app-buscaCaneca',
  templateUrl: './buscaCaneca.component.html',
  styleUrls: ['./buscaCaneca.component.css']
})

export class BuscaCanecaComponent implements OnInit{
  CanecaBabyYoda = 'assets/caneca_baby_yoda.png';
  CanecaSuperMan = 'assets/caneca_superman.png';
  CanecaChihiro = 'assets/caneca_chihiro.png';
  CanecaDumbo = 'assets/caneca_dumbo.png';
  CanecaCapitaoMarvel = 'assets/caneca_captao_marvel.png';
  CanecaSailorMoon = 'assets/caneca_sailormoon.png';  

  public produtos: ProdutoModel[] = [];
  public produtosCaneca: ProdutoModel[] = [];
  public produtosFunko: ProdutoModel[] = [];
  public produtosChaveiro: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.listar().subscribe(
      (data: ProdutoModel[]) => {
        this.produtosCaneca = data.filter(produto => produto.categoria === 'caneca');
        this.produtosFunko = data.filter(produto => produto.categoria === 'funko');
        this.produtosChaveiro = data.filter(produto => produto.categoria === 'chaveiro');

        console.log(data);
        this.produtosCaneca.forEach(produto => {
          produto.url = 'assets/'+produto.url;
        });
      },
      (error) => {
        console.error('Ocorreu um erro ao listar os produtos de caneca:', error);
      }
    );
  }

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
