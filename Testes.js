import Conta from './Conta.js';
import AgenciaBancaria from './AgenciaBancaria.js';


const agencia = new AgenciaBancaria(1);

const conta1 = new Conta(1, 'Conta Corrente', 1000);
const conta2 = new Conta(2, 'Poupança', 500);

agencia.addConta(conta1);
agencia.addConta(conta2);

console.log(agencia.listContas());

const contaEncontrada = agencia.getConta(2);
if (contaEncontrada) {
  console.log(`Saldo da conta 2: ${contaEncontrada.saldo}`);
  contaEncontrada.depositar(200);
  console.log(`Novo saldo da conta 2: ${contaEncontrada.saldo}`);
  const valorRetirado = contaEncontrada.sacar(100);
  console.log(`Valor retirado da conta 2: ${valorRetirado}`);
  console.log(`Saldo atual da conta 2: ${contaEncontrada.saldo}`);
} else {
  console.log('Conta não encontrada.');
}