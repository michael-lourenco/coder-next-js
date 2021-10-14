import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Formulario from '../components/Formulario'
import { useState } from 'react'

export default function Home() {

  const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 55, '20'),
    new Cliente('Carlos', 24, '33'),
    new Cliente('Pedro', 30, '49'),
  ]

  function clienteSelecionado(cliente:Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente:Cliente) {
    
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente:Cliente) {
    setVisivel('tabela')
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
        { visivel === 'tabela' ? (
          <>
          <div className = {`
            flex
            justify-end
          `}>
            <Botao cor = "green" className = "mb-4"
              onClick = { novoCliente }
            >Novo Cliente</Botao>
          </div>
          <Tabela 
            clientes = { clientes } 
            clienteSelecionado = { clienteSelecionado }
            clienteExcluido = { clienteExcluido }
            ></Tabela>
          </>
        ) : (
          <Formulario 
            cliente = { cliente }
            clienteMudou = { salvarCliente }
            cancelado = { () => setVisivel('tabela') }
          />
        )}
      </Layout>
    </div>
  )
}
