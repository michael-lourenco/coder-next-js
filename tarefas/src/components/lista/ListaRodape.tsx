import ListaTarefas from '../../model/lista-tarefas'

interface ListaRodapeProps {
  tarefas: ListaTarefas
  mudou: (tarefas: ListaTarefas) => void
}

export default function ListaRodape(props: ListaRodapeProps){

  const { tarefas, mudou} = props

  function renderizarQuantidadeItens() { 
    return (
      <>
        <span className = "text-gray-300 hidden lg:inline">
          { tarefas.quantidade }
          { tarefas.quantidade === 0
            ? ' Nenhuma Tarefa Encontrada' 
            : tarefas.quantidade === 1 
              ? ' Tarefa Encontrada' 
              : ' Tarefas Encontradas'}
        </span>
        <span></span>
      </>
    )
  }

  function renderizarBotoesFiltro() { 
    return (
      <div>
        
      </div>
    )
  }

  function renderizarExcluirConcluidas() { 
    return (
      <div>
        
      </div>
    )
  }

  return (
    <li className = "flex p-5">
      { renderizarQuantidadeItens() }
      { renderizarBotoesFiltro() }
      { renderizarExcluirConcluidas() }
    </li>
  )
}