import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay";

export default function Contador(){
  const [numero, setNumero] = useState(0);

  const incrementar = () => setNumero(numero + 1)

  const decrementar = () => setNumero(numero - 1)

  return (
    <div>
      <h1> Contador </h1>
      <ContadorDisplay numero = {numero ? numero : 0} />
      <button onClick = { decrementar }> - </button>
      <button onClick = { incrementar }> + </button>
    </div>
  )
}