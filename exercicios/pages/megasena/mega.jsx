import { useState, useEffect } from 'react'
import NumeroDisplay from '../../components/NumeroDisplay'
import mega from '../../functions/mega'

export default function MegaSena() {
  const [quantidade, setQuantidade] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(mega())
  }, [])


  function renderizarNumeros(){
    return numeros.map(numero => <NumeroDisplay key = { numero } numero = { numero } />)
  }
  return (
    <div style ={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1> Mega Sena </h1>
      <div style ={{
        display: 'flex',
        flexWrap:"wrap",
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {renderizarNumeros()}
      </div>
      <div>
        <input 
          type="number" 
          min = {6} 
          max = {20} 
          value = {quantidade}
          onChange = { ev => setQuantidade(ev.target.value)}
        />
        <button onClick = { () => setNumeros(mega(quantidade)) } >
          Gerar Aposta
        </button>
      </div>
    </div>
  )
}

