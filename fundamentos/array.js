const valores = [ 7, 8, 6, 9]
console.log(valores[4])

valores[4] = 10
console.log(valores, valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //exclui o último elemento do array
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)
