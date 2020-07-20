// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('i = ', i); 

// Devido ao escopo da variável Let, teremos um erro no código anterior.
// Fora do loop, a variável não está disponível;

const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  })
}

funcs[2]()
funcs[8]()