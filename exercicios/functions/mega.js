export default function mega(quantidade = 6, numeros = []){
  let qtd = +quantidade
  if(qtd < 6 && qtd > 60){
    throw "qtd inválida!"
  }

  if(numeros.length === qtd){
    return numeros.sort((n1, n2) => n1 - n2)
  }

  const novoNumeroAleatorio = parseInt(Math.random() * 60) + 1

  if(!numeros.includes(novoNumeroAleatorio)){
    return mega(qtd, [...numeros, novoNumeroAleatorio])
  } else {
    return mega(qtd, numeros)
  }
}
