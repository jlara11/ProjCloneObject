// Classe Pessoa  construtor
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


// metodo retornar dados
 toString() {
    return `Nome: ${this.nome}, Idade: ${this.idade}`;
}

// metodo clone
    clone() {
        return new this.constructor(this.nome, this.idade);
    }

  
}

// Classe PessoaManager (DEUS)
class PessoaManager {
    constructor() {
        this.pessoas = {};
    }

    addPessoa(nome, idade, id) {
        const pessoa = new Pessoa(nome, idade);
        this.pessoas[id] = pessoa;
    }

    getPessoa(id) {
        return this.pessoas[id].clone();
    }
}

// UTILIZAR A ESTRUTURA

const manager = new PessoaManager();

// Adicionar Pessoas
manager.addPessoa("João", 30, 1);
manager.addPessoa("Maria", 25, 2);
manager.addPessoa("Pedro", 20, 3);
manager.addPessoa("Carlos", 30, 4);
manager.addPessoa("Emilia", 50, 5);

// Clonar Pessoas
const pessoa1 = manager.getPessoa(1);
const pessoa2 = manager.getPessoa(5);

// Modificar Informações
pessoa1.idade = 18;
pessoa2.nome = "Alvaro Jose";
pessoa2.idade = 55;

// Imprimir Resultados
console.log(manager.getPessoa(1).toString());
console.log(manager.getPessoa(2).toString());
console.log(manager.getPessoa(3).toString());
console.log(manager.getPessoa(4).toString());
console.log(manager.getPessoa(5).toString());
console.log("--------------------------------------------------------");
console.log(pessoa1.toString());
console.log(pessoa2.toString());
