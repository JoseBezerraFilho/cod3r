// contexto léxico 1
const saudacao = 'Opa'

// contexto léxico 2
// A constante saudacao definida na função na entra em conflito com a constante criada anteriormente devido estarem em escopos diferentes.

function exec() {
  const saudacao = 'Fala'
  return saudacao
}

// Objetos são grupos aninhados de pares nome /valor

const cliente = {
  nome: 'José',
  idade: 42,
  peso: 76,
  endereco: {
    rua: 'Torres Galvão',
    numero: 85
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

