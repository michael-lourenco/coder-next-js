import { useState } from 'react';
import Atributo from "../../components/codex/Atributo";

export default function Atributos() {
  const [numero, setNumero] = useState(0);

  const incrementar = () => setNumero(numero + 1)

  const decrementar = () => setNumero(numero - 1)

  return (
    <div id="atributos">
      <h1> Atributos </h1>
      <Atributo sigla = "str" valor = { numero ? numero : 0 } />
      <div>
        <button onClick = { decrementar }> - </button>
        <button onClick = { incrementar }> + </button>
      </div>
    </div>
  )
}

