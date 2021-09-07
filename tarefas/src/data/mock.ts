import Tarefa from '../model/tarefa'
import ListaTarefas from '../model/lista-tarefas'
import TipoFiltro from '../model/tipo-filtro'

const tarefasIniciais: Tarefa[] = [
  Tarefa.criarAtiva(1, 'Estudar Next'),
  Tarefa.criarConcluida(2, 'Limpar carro'),
  Tarefa.criarAtiva(3, 'Comprar livro do mês'),
  Tarefa.criarConcluida(4, 'Dormir'),
]

export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)
