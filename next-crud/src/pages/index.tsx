import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Formulario from '../components/Formulario'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 55, '20'),
    new Cliente('Carlos', 24, '33'),
    new Cliente('Pedro', 30, '49'),
  ]

  function clienteSelecionado(cliente:Cliente) {
    
  }

  function clienteExcluido(cliente:Cliente) {
    
  }

  return (
    <div className = {`
      flex
      h-screen
      justify-center
      items-center
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      text-white
    `}>
      <Layout titulo = "Cadastro Simples">
        <div className = {`
          flex
          justify-end
        `}>
          <Botao cor = "green" className = "mb-4">Novo Cliente</Botao>
        </div>
        <Tabela 
          clientes = { clientes } 
          clienteSelecionado = { clienteSelecionado }
          clienteExcluido = { clienteExcluido }
          ></Tabela>
          <Formulario cliente = { clientes[1] }/>
      </Layout>
    </div>
  )
}
