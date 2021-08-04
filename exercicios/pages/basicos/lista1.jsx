/*
Criar uma lista que contenha a sequencia de 1 a 10 na estrutura a seguir:
  <div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </div>
*/

export default function lista(){

  return(
    <div>
      {gerarLista(10)}
    </div>
  )
}

function gerarLista(quantidade){
  let lista = []

  for(let i=1; i <= quantidade; i++){
    lista.push(<span key={i} >{i}, </span>)
  }

  return lista
}