alert("Função Construtora ------------>" +
      "\nPressione 'OK' para avançar...");

class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcArea() {
        return this.base * this.altura;
    }
}


var base, altura;
base = prompt("Digite o valor da base: ");
altura = prompt("Digite o valor da altura: ");

objRetangulo = new Retangulo(base, altura);
alert("O cálculo da área é: " + objRetangulo.calcArea());


alert("Função Conta ------------>" +
     "\nPressione 'OK' para avançar...");

function Conta() {
    var nomeCorrentista, banco, numConta, saldo;
    this.getNomeCorrentista = function () {
        return nomeCorrentista;
    }
    this.getBanco = function () {
        return banco;
    }
    this.getNumConta = function () {
        return numConta;
    }
    this.getSaldo = function () {
        return saldo;
    }
    this.setNomeCorrentista = function (value) {
        nomeCorrentista = value;
    }
    this.setBanco = function (value) {
        banco = value;
    }
    this.setNumConta = function (value) {
        numConta = value;
    }
    this.setSaldo = function (value) {
        saldo = value;
    }
}

function Corrente() {
    var saldoEspecial;
    this.getSaldoEspecial = function () {
        return saldoEspecial;
    }
    this.setSaldoEspecial = function (value) {
        saldoEspecial = value;
    }
}

function Poupanca() {
    var juros, dataVencimento;
    this.getJuros = function () {
        return juros;
    }
    this.getDataVencimento = function () {
        return dataVencimento;
    }
    this.setJuros = function (value) {
        juros = value;
    }
    this.setDataVencimento = function (value) {
        dataVencimento = value;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista("Vitor Sousa");
contaCorrente.setBanco("Itau");
contaCorrente.setNumConta("4055789982");
contaCorrente.setSaldo(7200);
contaCorrente.setSaldoEspecial(2000);

contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista("Vitos Sousa");
contaPoupanca.setBanco("C6 Bank");
contaPoupanca.setNumConta("4055784658");
contaPoupanca.setSaldo(9300);
contaPoupanca.setJuros(0.1);
contaPoupanca.setDataVencimento("13");

alert("CONTA CORRENTE:" +
    "\nNome Correntista: " + contaCorrente.getNomeCorrentista() +
    "\nBanco: " + contaCorrente.getBanco() +
    "\nN° Conta: " + contaCorrente.getNumConta() +
    "\nSaldo: " + contaCorrente.getSaldo() +
    "\nSaldo Especial: " + contaCorrente.getSaldoEspecial());

alert("CONTA POUPANÇA:" +
    "\nNome Correntista: " + contaPoupanca.getNomeCorrentista() +
    "\nBanco: " + contaPoupanca.getBanco() +
    "\nN° Conta: " + contaPoupanca.getNumConta() +
    "\nSaldo: " + contaPoupanca.getSaldo() +
    "\nJuros: " + contaPoupanca.getJuros() +
    "\nData Vencimento: Todo dia " + contaPoupanca.getDataVencimento());







