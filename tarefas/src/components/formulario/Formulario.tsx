import { useState } from "react"
import Tarefa from '../../model/tarefa'

interface FormularioProps {
  novaTarefaCriada: (tarefa: Tarefa) => void
}

export default function Formulario(props: FormularioProps) {
  const [descricao, setDescricao] = useState('')

  function criarNovaTarefa() {
    if(descricao?.trim().length > 0) {
      const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao)
      props.novaTarefaCriada(novaTarefa)
      setDescricao('')
    }
  }

  return(
    <div>
      <input 
        type = "text" 
        value = { descricao }
        onChange = { e => setDescricao(e.target.value) }
        onKeyDown = { e => e.key === 'Enter' ? criarNovaTarefa() : false }
      />
    </div>
  )
}