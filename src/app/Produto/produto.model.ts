export class ProdutoModel {
    public idproduto: Number;
    public nome: String;
    public descricao: String;
    public categoria : String ;
    public valor: String;
    public quantidade: Number;

    public constructor(){
        this.idproduto=0;
        this.nome="";
        this.descricao="";
        this.categoria="";
        this.valor="0";
        this.quantidade=0;    
    }
}
