const prompt = require("prompt-sync")()

class Personagem {
#classe

    constructor(nome, vida, ataque, defesa, stamina , habilidade) {
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
        super(nome, 150, 30, 25, 100, "Golpe Poderoso")
    }
}

class Mago extends Personagem {
    constructor(nome) {
        super(nome, 90, 50, 10, 80, "Bola de Fogo")
    }
}

class Arqueiro extends Personagem {
    constructor(nome) {
        super(nome, 110, 35, 15, 90, "Precisão")
    }
}
const nome = prompt("Digite o nome do seu personagem:")

const escolha = prompt(`Escolha sua classe:
1 - Guerreiro
2 - Mago
3 - Arqueiro`)