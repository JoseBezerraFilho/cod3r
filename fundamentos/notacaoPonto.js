console.log(typeof console.log);
console.log(typeof Math);
console.log(Math.ceil(6.23));

const obj1 = {}
// Duas maneiras de inserir par nome /valor no objeto
obj1.nome = 'Soccer ball'
obj1.nome['nome'] = 'Volley ball'

function Obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log('Exec...');
  }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')

console.log(obj2);
console.log(obj3.nome);
obj3.exec()