import Tarefa from '../model/tarefa'
import tarefasIniciais from '../data/mock'
import Selecao from '../components/lista/Selecao'

export default function Home() {

  // let tarefas = tarefasIniciais
  // tarefas = tarefas.excluirConcluidas()
  // tarefas = tarefas.filtrarConcluidas()
  // tarefas = tarefas.filtrarAtivas()
  // tarefas = tarefas.removerFiltro()
  // tarefas = tarefas.adicionarTarefa(Tarefa.criarConcluida(5, 'Lavar o carro'))
  // tarefas = tarefas.adicionarTarefa(Tarefa.criarAtiva(6, 'Fazer caminhada'))
  // tarefas = tarefas.modificarTarefa(tarefas.itens[2].alternarStatus())
  // tarefas = tarefas.modificarTarefa(tarefas.itens[3].alternarStatus())

  // function renderizarTarefas() {
  //   return tarefas.itens.map((tarefa, indice) => {
  //     return (
  //       <div key={ `${ tarefa.id }-${ indice }` }>
  //         <span>{ tarefa.id } | </span>
  //         <span>{ tarefa.descricao } | </span>
  //         <span>{ tarefa.concluida ? 'Concluída' : 'Ativa' }</span>
  //       </div>
  //     )
  //   })
  // }

  return (
    <div className={`
      flex 
      flex-col
      justify-center
      items-center
      text-white
      bg-gradient-to-tr
      from-gray-600
      to-gray-900
      h-screen
    `}>
      {/* renderizarTarefas() */}
      <Selecao valor = { true }/>
      <Selecao valor = { false }/>
    </div>
  )
}
