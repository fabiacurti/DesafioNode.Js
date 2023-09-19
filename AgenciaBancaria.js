import Conta from './Conta.js';

class AgenciaBancaria {
  constructor(codigo) {
    this.contas = [];
    this.codigo = codigo;
  }

  addConta(conta) {
    this.contas.push(conta);
  }

  getConta(numero) {
    for (const conta of this.contas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }

  listContas() {
    let result = '';
    for (const conta of this.contas) {
      result += `Número: ${conta.numero}, Titulo: ${conta.titulo}, Saldo: ${conta.saldo}\n`;
    }
    return result;
  }
}

export default AgenciaBancaria;
