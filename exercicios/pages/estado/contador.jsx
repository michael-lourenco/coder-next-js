import { useState } from "react"

export default function Contador(){
  const [number, setValor] = useState(0);

  function somar() {
    const newValue = number + 1
    setValor(newValue)
  }

  function subtrair() {
    const newValue = number - 1
    setValor(newValue)
  }

  return (
    <div>
      <h1> Contador </h1>
      <div> Valor: { number ? number : 0 } </div>
      <button onClick = { subtrair }> - </button>
      <button onClick = { somar }> + </button>
    </div>
  )
}