import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../Produto/produto.model';
import { ProdutoService } from '../Produto/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public produtos: ProdutoModel[] = [];
  public produtosCaneca: ProdutoModel[] = [];
  public produtosFunko: ProdutoModel[] = [];
  public produtosChaveiro: ProdutoModel[] = [];

  caminhoRotaCaneca   = '';
  caminhoRotaFunko    = '';
  caminhoRotaChaveiro = '';
  loading = false;

  constructor(private produtoService: ProdutoService, private router: Router) {}

  navigateToCaneca(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate([this.caminhoRotaCaneca]).then(() => {
        this.loading = false;
      });
    }, 1000),
    () => {
      this.loading = false;
    }; 
  }
  navigateToFunko(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate([this.caminhoRotaFunko]).then(() => {
        this.loading = false;
      });
    }, 1000),
    () => {
      this.loading = false;
    }; 
  }
  navigateToChaveiro(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate([this.caminhoRotaChaveiro]).then(() => {
        this.loading = false;
      });
    }, 1000),
    () => {
      this.loading = false;
    };    
  }

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.listar().subscribe(
      (data: ProdutoModel[]) => {
        this.produtosCaneca = data.filter(produto => produto.categoria === 'caneca');
        this.produtosFunko = data.filter(produto => produto.categoria === 'funko');
        this.produtosChaveiro = data.filter(produto => produto.categoria === 'chaveiro');

        this.produtosCaneca.forEach(produto => {
          produto.valorFormatado = produto.valor.toFixed(2).replace('.', ',');
          produto.url = 'assets/'+produto.url;
          this.caminhoRotaCaneca = produto.nome.replace(/ /g, '-').toLowerCase().trim();
        });
        this.produtosFunko.forEach(produto => {
          produto.valorFormatado = produto.valor.toFixed(2).replace('.', ',');
          produto.url = 'assets/'+produto.url;
          this.caminhoRotaFunko = produto.nome.replace(/ /g, '-').toLowerCase().trim();
        });
        this.produtosChaveiro.forEach(produto => {
          produto.valorFormatado = produto.valor.toFixed(2).replace('.', ',');
          produto.url = 'assets/'+produto.url;
          this.caminhoRotaChaveiro = produto.nome.replace(/ /g, '-').toLowerCase().trim();
        });
      },
      (error) => {
        console.error('Ocorreu um erro ao listar os produtos de caneca:', error);
      }
    );
  }  

}