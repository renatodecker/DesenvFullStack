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
    #matricula;
    notas=[];
    constructor(nome,anoNascimento,matricula){
        super(nome,anoNascimento,'estudante');
        this.#matricula = matricula;
        this.#ola();
    }
    getMatricula(){
        return this.#matricula;
    }
    #ola(){
        super.ola();
        console.log('Colega');
    }
    addNota(nota){
        this.notas.push(nota);
    }
}

const aluno = new Estudante('Renato',1983,'01238400');
console.log(aluno.matricula);
console.log(aluno.getMatricula());
//console.log(aluno.ola());

class Nota {
    #grau
    constructor(disciplina,grau){
        this.disciplina = disciplina;
        this.#grau = grau;
    }

    setGrau(valor){
        if(valor < 0 || valor > 10){
            throw new Error();
        }
        this.#grau = valor;
    }
    getGrau(){
        return this.#grau;
    }

}

aluno.notas = [new Nota('OO',10)];
//aluno.notas = new Nota('OO2',10)

console.log(aluno.notas[0].getGrau());

class Professor extends Pessoa{
    constructor(nome,anoNascimento,titulacao){
        super(nome,anoNascimento,'Professor');
        this.titulacao = titulacao;
    }
    getTitulacao(){
        return this.titulacao;
    }
}
