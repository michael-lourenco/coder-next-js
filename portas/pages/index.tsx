import Porta from "../components/Porta"
import PortaModel from "../model/porta"
import { useState } from "react"

export default function Home() {
  const [porta, setPorta] = useState(new PortaModel(1));
  const [texto, setTexto] = useState("...");

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <input 
        type = "text" 
        value = { texto } 
        onChange = { e => setTexto(e.target.value)} />
      <Porta 
        value = { porta } 
        onChange = { 
          novaPorta => setPorta(novaPorta) 
        } 
      />
    </div>
  )
}
