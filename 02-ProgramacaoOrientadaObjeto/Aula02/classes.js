class Pessoa{
    constructor(nome,anoNascimento,profissao){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };

    ola(){
        console.log('Olá, eu sou o ' + this.nome);
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoNascimento;
    }
}

const pessoa = new Pessoa(['Renato','Decker'],1983,'Analista de Sistemas');
console.log(pessoa);
pessoa.ola();
console.log(pessoa.calculaIdade());

class Estudante extends Pessoa{
    constructor(nome,anoNascimento,matricula){
        super(nome,anoNascimento,'estudante');
        this.matricula = matricula;
    }
    escreveMatricula(){
        return this.matricula;
    }
    ola(){
        super.ola();
        console.log('Colega');
    }
}

const aluno = new Estudante('Renato',1983,'Estudante','01238400');
console.log(aluno.escreveMatricula());
console.log(aluno.ola());

class Professor extends Pessoa{
    constructor(nome,anoNascimento,titulacao){
        super(nome,anoNascimento,'Professor');
        this.titulacao = titulacao;
    }
    getTitulacao(){
        return this.titulacao;
    }
}
