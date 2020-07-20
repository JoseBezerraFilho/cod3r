let num1 = 1
let num2 = 2

num1++
console.log(num1);
// num1--
--num1 /// forma pré fixada tem precedência maior que a pós fixada.
console.log(num1);

console.log(++num1 === num2--);
// Observe o resultado, antes de comparar o num1 com o num2, o num1 sofre a adição e num2 sofrerá a substração após a comparação.

//refatorar significa reescrever o código.