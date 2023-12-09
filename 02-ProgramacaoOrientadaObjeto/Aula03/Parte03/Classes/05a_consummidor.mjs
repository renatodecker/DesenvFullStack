import { Carro } from "./05a_carro.mjs";

var carro = new Carro(60);

console.log(carro.capacidadeDoTanque);
console.log(carro.tanque);

carro.tanque = 40
console.log(carro.tanque);

carro.tanque = 25
console.log(carro.tanque);

carro.tanque = 10
console.log(carro.tanque);

