// Quando atribuimos um objeto a uma variável, na realidade estamos referenciando um endereço da memória a variável. Por esta razão, se mudarmos o valor de algum atributo da variável b abaixo, esta mudança será refletida na variável a. Logo a e b referenciam o mesmo endereço na memória.

const a = { name: 'Teste'}
console.log(a)

const b = a
console.log(b)

b.name = 'Mudei'
console.log(a, b)

// Com variáveis primitivas, essa referência não ocorre.

let c = 3
let d = c
d++

console.log(c, d)

// Null and undefined

let valor // não inicilaizado, retorna undefined
console.log(valor)

valor = null // ausência de valor - sem endereço na memória.
// console.log(valor.toString()) //vai gerar erro de tipo.

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.5
console.log(produto)
console.log(produto.preco.a)

produto.preco = undefined // evite o uso
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)


