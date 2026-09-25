# SIstema-Basico-de-classes

## class Jogador
criando uma classe chamada Jogador

Ela define que todo jogador terá
├── nome
├── posição
├── objetivo
├── ataque
├── recepção
├── salto
├── velocidade
├── técnica
└── overall

Depois sua Factory pode usar essa classe para criar:
Levantador
Oposto
Ponteiro
Central
Líbero

## O constructor
constructor(nome, posicao, objetivo, ataque, recepcao, salto, velocidade, tecnica) {

O constructor é executado automaticamente quando você cria um novo jogador.

### this.overall = this.calcularOverall()
qui você está dizendo:
"Quando o jogador for criado, calcule automaticamente o overall dele."
(overall = media de todos os atributos)

### Math.round() é uma função do JavaScript usada para arredondar um número para o inteiro mais próximo.

### module.exports = Jogador
Isso permite que outro arquivo use a classe Jogador.

const Jogador = require("../classes/Jogador")

Aqui você está pegando a classe Jogador que está em:
### classes
### Jogador.js
### E trazendo para a Factory.


###class Levantador extends Jogador {

Aqui você está criando uma classe chamada Levantador e assim com as outras demais posições

## O super()
Essa é uma das partes mais importantes:
super(
    nome,
    "Levantador",
    "Organizar as jogadas e preparar a bola para os atacantes.",
    70,
    85,
    65,
    80,
    100
)
super() chama o constructor da classe pai. 

### classe pai Jogador onde entrega todas as informanções para a classe filha

class Libero extends Jogador 
                ^

extend serve para fazer uma classe herdar características de outra classe.

###class Levantador extends Jogador {...}
O Levantador herda o que existe na class Jogador.
