import ListaTarefas from "../../model/lista-tarefas";
import ListaItem from './ListaItem'
import ListaRodape from './ListaRodape'
interface ListaProps {
  tarefas: ListaTarefas
  mudou: (tarefas: ListaTarefas) => void
}

export default function Lista(props: ListaProps) {
  const { tarefas } = props

  function renderizarTarefas(){
    return tarefas.itens.map(tarefa => {
      return <ListaItem 
        key = { tarefa.id}
        valor = { tarefa.descricao }
        concluido = { tarefa.concluida }
        alterarStatus = { () => { 
          const tarefaModificada = tarefa.alternarStatus()
          const novaLista = tarefas.modificarTarefa(tarefaModificada)
          props.mudou(novaLista)
        }} 
      />
    })
  }

  return (
    <div className = {`
      flex
      w-3/5
    `}>
      <ul className = {`
        w-full
        list-none
        bg-white
        shadow-lg
        rounded-lg
      `}>
        { renderizarTarefas() }
        <li className = {`
          p-5
        `}>
          <ListaRodape 
            tarefas = { props.tarefas }
            mudou = { props.mudou }
          />
        </li>
      </ul>
    </div>
  )
}