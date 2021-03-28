//Classe abstrata - Não pode ser instanciada, só herdada .
export class Conta {
    constructor( saldoInicial , cliente , agencia){
        this._saldo = saldoInicial; 
        this._cliente = cliente ; 
        this._agencia = agencia ;  
        if(this.constructor == Conta){
            throw new Error("Você nao deveria instanciar um objeto do tipo conta diretamente , pois é uma classe abstrata");
        }
     }

     
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this.saldo
    }
 
    //Função abstrato
    sacar(valor) {
        throw new Error ("A função Sacar da conta é abstrata . ");
    }
   
    _sacar(valor , taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }


 
     depositar(valor){
          this._saldo += valor;
     }
 
     transferir(valor , conta){
         const valorSacado = this.sacar(valor);
         conta.depositar(valorSacado);
     }
}