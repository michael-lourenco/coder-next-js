
import { useState } from 'react'
import Lista from '../components/lista/Lista'
import tarefasIniciais from '../data/mock'


export default function Home() {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  return (
    <div className={`
      flex 
      flex-col
      justify-center
      items-center
      text-white
      h-screen
      bg-gray-300
    `}>
      <Lista tarefas = { tarefas } mudou = { (novasTarefas) => {
        setTarefas(novasTarefas);
      } } />
    </div>
  )
}
