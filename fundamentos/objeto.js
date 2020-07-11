// Objeto != JSON
// Embora seja muito parecido a escrita

// O JSON é um formato de texto usado para transferência de dados, independente da linguagem de programação assim como o XML, CSV ou YAML e o Objeto é uma coleção de pares chaves, valor.

// JSON - JavaScript Object Notation só aceita string, number, boolean, array, null e outros JSON.

// Objeto - além dos valores acima, o objeto literal, Data(formato Date), Função, undefined são acrescentados aos tipos do objeto.

// Por esta razão o MongoDB usa o BSON que além de armazernar o JSON em formato binário, adciona suporte a outros tipos de dados como: integer, double, date, byte array, objeto BSON, array BSON, código Javascript, dados binários em MD5 e expressões regulares.

// Onde diferem então?
// Criaçao de atributos - no JSON é necessário uso de aspas duplas enquanto no objeto apenas o nome é necessário.

let objeto = {
  umaProp: "Lorem Ipsum"
}

let json = {
  "umaProp": "Lorem Ipsum"
}

// O objeto permite uso de aspas simples ou duplas, no JSON <a href=""></a>penas aspar duplas, tornando a escrita mais uniforme

// Mais exemplos:

const obj = {}
obj.nome = 'Iphone 11'
obj.preco = 5000.00
obj['Desconto'] = 400.00

const prod = { 
  nome: 'camisa',
  preco: 79.50
}

console.log(obj)