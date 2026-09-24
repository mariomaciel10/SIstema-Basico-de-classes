const prompt = require("prompt-sync")()

class Personagem {
    #classe

    constructor(nome, vida, ataque, defesa, stamina, habilidade) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
        this.stamina = stamina
        this.habilidade = habilidade
    }

    mostrarStatus() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Vida: ${this.vida}`)
        console.log(`Ataque: ${this.ataque}`)
        console.log(`Defesa: ${this.defesa}`)
        console.log(`Stamina: ${this.stamina}`)
        console.log(`Habilidade: ${this.habilidade}`)
    }
}

class Guerreiro extends Personagem {
    constructor(nome) {
        super(nome, 150, 30, 25, 100, "bater")
    }
}

class Mago extends Personagem {
    constructor(nome) {
        super(nome, 90, 50, 10, 80, "doom")
    }
}

class Arqueiro extends Personagem {
    constructor(nome) {
        super(nome, 110, 35, 15, 90, "flecha de prata")
    }
}

class Paladino extends Personagem {
    constructor(nome) {
        super(nome, 160, 25, 35, 90, "Defensor da Justiça")
    }
}

class Assassino extends Personagem {
    constructor(nome) {
        super(nome, 100, 55, 10, 110, "salto de fé")
    }
}

class Barbaro extends Personagem {
    constructor(nome) {
        super(nome, 180, 40, 15, 120, "satira")
    }
}
const nome = prompt("Digite o nome do seu personagem:")
const escolha = prompt(`Escolha sua classe:
1 - Guerreiro
2 - Mago
3 - Arqueiro
4 - Paladino
5 - Assassino
6 - Bárbaro
`)

const personagem = criarPersonagem(escolha, nome)

function criarPersonagem(escolha, nome) {
    if (escolha === "1") {
        return new Guerreiro(nome)
    }
     else if (escolha === "2") {
        return new Mago(nome)
    }
     else if (escolha === "3") {
        return new Arqueiro(nome)
    }
     else if (escolha === "4") {
        return new Paladino(nome)
    }
     else if (escolha === "5") {
        return new Assassino(nome)
    }
     else if (escolha === "6") {
        return new Barbaro(nome)
    }
     else {
        throw new Error("Escolha inválida.")
    }
}

personagem.mostrarStatus()

// super é usado para chamar o construtor da classe pai 
//sem ele teríamos que colocar os atributos de cada classe filha manualmente