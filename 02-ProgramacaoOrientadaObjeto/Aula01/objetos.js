/*var pessoa = {nome: 'Renato', idade: 40, saudar: function(nomeAmigo){
    console.log('Olá!' + nomeAmigo);
}};

pessoa.saudar('Renato');*/

/* Criação literal
var pessoa = {
    nome: ['Renato', 'Decker'],
    anoNascimento: 1983,
    profissao: 'Analista de Sistemas',
    calculaIdade: function(){
        return new Date().getFullYear() - this.anoNascimento;
    }
}

console.log(pessoa.calculaIdade() + ' ' + Date());*/

/*
let numero1 = 10;
let numero2 = 20;

function add(n1,n2){
    return n1+n2;
}

let z = add(numero1,numero2);
console.log('A soma é: ' + z);

const calculadora = {
    numero1: 10,
    numero2: 20,
    soma: function(){
        return this.numero1 + this.numero2;
    }
}

console.log('A segunda soma é: ' + calculadora.soma());*/


/* Formas de criar um objeto */

/* Literal */
var pessoa = {
    nome: ['Renato', 'Decker'],
    anoNascimento: 1983,
    profissao: 'Analista de Sistemas',
    calculaIdade: function(){
        return new Date().getFullYear() - this.anoNascimento;
    }
}

console.log(pessoa.calculaIdade() + ' ' + Date());


/* Forma fábrica */

function criarPessoa(nome, anoNascimento,profissao){
    return {
        nome,
        anoNascimento,
        profissao,
        calculaIdade: function(){
            return new Date().getFullYear() - this.anoNascimento;
        }
    }
}

const pessoa1 = criarPessoa('Renato','1983','Analista de sistemas');
console.log(pessoa1);

/* construtores */
function Pessoa(nome,anoNascimento,profissao){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoNascimento;
    }
}
const pessoa2 = new Pessoa('Renato Decker',1983,'Analista de Sistemas');
console.log(pessoa2);