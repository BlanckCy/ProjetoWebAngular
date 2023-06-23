export class ProdutoModel {
  public idproduto: number;
  public nome: string;
  public descricao: string;
  public categoria: string;
  public valor: number;
  public quantidade: number;
  public url: string;
  public valorFormatado: string;

  public constructor() {
    this.idproduto = 0;
    this.nome = "";
    this.descricao = "";
    this.categoria = "";
    this.valor = 0;
    this.quantidade = 0;
    this.url = "";
    this.valorFormatado = "";
  }
}
