// Classe Locadora de Carros

import { Carro } from "./05a_carro.mjs";

export class Locadora {
    #_carros

    constructor(){
        this.#_carros = [];
    }

    adicionaCarro(umCarro){
        this.#_carros.push(umCarro);
        console.log(this.#_carros.length);
    }

    consultaCarros(){
        this.#_carros.forEach(
            carro => console.log("Carro placa (" + carro.placa + "); Tanque: " + carro.tanque)
        )
    }

    abasteceCarro(indexQualCarro, quantidade){
        if (indexQualCarro >= 0 && indexQualCarro < this.#_carros.length)
            this.#_carros[indexQualCarro].tanque = quantidade;
    }
}