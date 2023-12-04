/*function Pessoa () {
    this.nome = ['Fulano', 'de Tal'];
    this.anoDeNascimento = 1990;
    this.profissao = 'Estudante'; this.calculaIdade = function() {
    return new Date().getFullYear() - this.anoDeNascimento; }
};

const pessoa = new Pessoa(); 
//console.log(pessoa.valueOf());

console.log(Object.getPrototypeOf(pessoa));
console.log(pessoa.__proto__);*/



/*
const pessoa = new Object();

pessoa.nome = ['Fulano', 'de Tal']; 
pessoa['anoDeNascimento'] = 1990; 
pessoa.profissao = 'Estudante'; 

pessoa.calculaIdade = function() {
    return new Date().getFullYear() - this.anoDeNascimento; 
};

console.log(Object.getPrototypeOf(pessoa)); 

const pessoa2 = Object.create(pessoa); 

console.log(Object.getPrototypeOf(pessoa2));
*/

function Pessoa(nome,anoNascimento,profissao){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;
    this.calculaIdade = function(){
        return new Date().getFullYear - this.anoNascimento;
    }
}

const pessoa = new Pessoa(['Renato','Decker'],1983,'Analista de Sistemas');
console.log(pessoa);

Pessoa.prototype.saudar = function(){
    console.log('Olá');
}
console.log(pessoa.saudar());