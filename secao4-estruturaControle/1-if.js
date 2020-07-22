// function soBoaNoticia(nota) {

//   if (nota >= 7) {
//     console.log('Aprovado');
//   }

// }

// soBoaNoticia(7.1)

// // Podemos usar o IF sem {}

// function teste(num) {
//   if (num > 7)    
//     console.log(num);
//   console.log('Final');
// }

// teste(6)
// teste(8)

Number.prototype.entre = function ( inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
  if (nota.entre(9, 10)) {
    console.log('Quadro de honra.')
  } else if (nota.entre(7, 8.99)) {
    console.log('Aprovado') 
  } else if (nota.entre(4, 6.99)) {
    console.log('Recuperação')
  } else if (nota.entre(0, 3.99)) {
    console.log('Reprovado')
  } else {
    console.log('Nota inválida');
  }

}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2.3)
imprimirResultado(-1)
console.log('Fim')