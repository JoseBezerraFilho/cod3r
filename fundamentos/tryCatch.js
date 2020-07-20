function tratarErroELancar(error) {
  // throw new Error ('Ops')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: error.name,
    msg: error.message,
    date: new Date
  }
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!');
  } catch(e) {
    tratarErroELancar(e)
  } finally {
    console.log('final');
  }
}

const obj = { name: 'roberto'}
imprimirNome(obj)