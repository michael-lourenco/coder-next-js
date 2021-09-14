
import { useState } from 'react'
import Cabecalho from '../components/template/Cabecalho'
import Conteudo from '../components/template/Conteudo'
import Lista from '../components/lista/Lista'
import tarefasIniciais from '../data/mock'


export default function Home() {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  return (
    <div className={`
      flex 
      flex-col
      h-screen
      bg-gray-300
    `}>
      <Cabecalho>
        <h1>Tarefas</h1>
      </Cabecalho>
      <Conteudo>
        <Lista tarefas = { tarefas } mudou = { (novasTarefas) => {
          setTarefas(novasTarefas);
        } } />
      </Conteudo>
    </div>
  )
}
