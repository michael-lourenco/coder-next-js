import { useState } from 'react';
import Sorteio from "../../components/megasena/Sorteio";

export default function Atributos() {
  const [numero, setNumero] = useState(6);

  return (
    <div id="megasena">
      <h1> Mega Sena </h1>
      <Sorteio quantidade = { numero } />
      <div>
        <input type="text" value ={ numero } onChange = {e => setNumero(e.target.value)}/>
      </div>
    </div>
  )
}

