import Porta from "../components/Porta"
import PortaModel from "../model/porta"
import { useState } from "react"
import { criarPortas } from "../functions/portas";

export default function Home() {
  const [porta, setPorta] = useState(new PortaModel(1));

  console.log(criarPortas(3,2));

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Porta 
        value = { porta } 
        onChange = { novaPorta => setPorta(novaPorta) } 
      />
    </div>
  )
}
