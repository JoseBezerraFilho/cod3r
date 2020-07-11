// O presidente do país JavaScript.

console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// Função sem retorno
// Quais os tipos dos parâmetros abaixo? Pode ser qualquer coisa, afinal o JS tem tipagem dinâmica, ou fracamente tipada.

function imprimirSoma(a, b) {
  console.log(a + b) // pode ser uma soma de dois números inteiros ou uma concatenação de strings.
}

imprimirSoma(5, 10)
imprimirSoma('José ', 'Bezerra', 4, 9)
imprimirSoma()

// Função com retorno

function soma(a, b=0) {
  return a + b
}

console.log(soma(2,3))
console.log(soma(2))

// Atribuir uma função dentro de uma variável

const mostreSoma = function (a, b) { // função anônima
  console.log(a + b)
}

mostreSoma(2, 8)


// usando Arrow function

const soma1 = (a, b) => {
  return a + b 
}

console.log(soma1(10, 30))

// retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

const imprime2 = a => console.log(a)
console.log(typeof imprime2)
imprime2('Legal!!')