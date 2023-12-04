class Pessoa{
    constructor(nome,anoNascimento,profissao){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };

    ola(){
        console.log('Olá');
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoNascimento;
    }
}

const pessoa = new Pessoa(['Renato','Decker'],1983,'Analista de Sistemas');
console.log(pessoa);
pessoa.ola();
console.log(pessoa.calculaIdade());