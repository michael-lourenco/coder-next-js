import { useState } from "react"

export default function Contador(){
  const [numero, setNumero] = useState(0);

  const incrementar = () => setNumero(numero + 1)

  const decrementar = () => setNumero(numero - 1)

  return (
    <div>
      <h1> Contador </h1>
      <div> Valor: { numero ? numero : 0 } </div>
      <button onClick = { decrementar }> - </button>
      <button onClick = { incrementar }> + </button>
    </div>
  )
}