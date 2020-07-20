// novo recurso do ES2015

const pessoa = {
  nome: 'Belle',
  idade: 10,
  endereco: {
    logradouro: 'Rua Torres Galvão',
    numero: 85
  }
}

const { nome , idade } = pessoa
// Na linha anterior estamos dizendo para o programa tirar do objeto pessoa os atributos nome e idade, gerando duas novas variáveis.

console.log(nome, idade);

// E se eu quiser mudar o nome da variável nome e idade? Abaixo temos a resposta:

const { nome: name, idade: age} = pessoa
console.log(name, age)
console.log(typeof name, typeof age);

// Tentando extrair atributos que não existem:

const { sobrenome, aniversario = true } = pessoa
console.log(sobrenome, aniversario);

// Observe a diferença abaixo:

const { endereco: address } = pessoa
console.log(address);

const { endereco: { logradouro: street, numero: number, cep: zip}} = pessoa
console.log(street, number, zip);
