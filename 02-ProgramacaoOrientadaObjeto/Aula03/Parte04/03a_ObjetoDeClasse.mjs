import { UmaClasse } from "./03a_umaClasse.mjs";

let umaClasse = new UmaClasse("Primeiro atributo")

console.log(umaClasse);

let {capturaPrimeiroAtributo: umAtributo,outroAtributo} = umaClasse;

console.log("um Atributo: " + umAtributo)
console.log("Outro Atributo: " + outroAtributo)