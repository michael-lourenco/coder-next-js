export default function repeticao(){
  const listaAprovados = [
    "Joao",
    "Maria",
    "Carlos",
    "Daniel",
    "Daiana"
  ]

  const itens = listaAprovados.map((item,index)=>{
    return <li key={index}> {item} </li>
  })

  return (
    <ul>
      {itens}
    </ul>
  )
}