import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 55, '2'),
    new Cliente('Carlos', 24, '3'),
    new Cliente('Pedro', 30, '4'),
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
        <Tabela 
          clientes = { clientes } 
          clienteSelecionado = { clienteSelecionado }
          clienteExcluido = { clienteExcluido }
          ></Tabela>
      </Layout>
    </div>
  )
}
