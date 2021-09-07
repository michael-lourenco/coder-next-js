import Tarefa from '../model/tarefa'
import tarefasIniciais from '../data/mock'

export default function Home() {

  let tarefas = tarefasIniciais

  function renderizarTarefas() {
    return tarefas.itens.map((tarefa, indice) => {
      return (
        <div key={ `${ tarefa.id }-${ indice }` }>
          <span>{ tarefa.id } | </span>
          <span>{ tarefa.descricao } | </span>
          <span>{ tarefa.concluida ? 'Concluída' : 'Ativa' }</span>
        </div>
      )
    })
  }

  return (
    <div className={`
      flex 
      flex-col
      justify-center
      items-center
      text-white
      bg-gradient-to-tr
      from-purple-500
      to-yellow-600
      h-screen
    `}>
      { renderizarTarefas() }
    </div>
  )
}
