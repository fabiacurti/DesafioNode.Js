class Conta {
  constructor(numero, titulo, saldo) {
    this.numero = numero;
    this.titulo = titulo;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      return true;
    }
    return false;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return valor;
    }
    return 0;
  }
}

export default Conta;
