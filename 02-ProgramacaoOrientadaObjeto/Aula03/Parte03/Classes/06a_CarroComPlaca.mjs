import { Carro } from "./05a_carro.mjs";

export class CarroComPlaca extends Carro{
    #_placa
    constructor(umaPlaca){

        super(60);
        this.#_placa = umaPlaca;
    }

    get placa(){
        return this.#_placa;
    }
}