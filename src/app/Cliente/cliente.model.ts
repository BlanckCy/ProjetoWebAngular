export class ClienteModel {
    public idcliente: number;
    public nome : string;
    public email: string;
    public senha: string;

    public constructor(){
        this.idcliente=0;
        this.nome="";
        this.email="";
        this.senha="";
   
    }
}
