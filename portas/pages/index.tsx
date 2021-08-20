import styles from '../styles/Formulario.module.css'
import Cartao from '../components/Cartao'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'

export default function Formulario() {
  const [quantidadePortas, setQuantidadePortas] = useState(3)
  const [portaComPresente, setPortaComPresente] = useState(2)

  return (
    <div className = { styles.formulario } >
      <div>
        <Cartao bgcolor = "#c0392c">
          <h1>
            Monty Roll
          </h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica 
            text = "Qtd Portas" 
            value = { quantidadePortas } 
            onChange = { 
              novaQuantidade => setQuantidadePortas(novaQuantidade) } 
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica 
            text = "Porta Com Presente" 
            value = { portaComPresente } 
            onChange = { 
              novaPortaComPresente => setPortaComPresente(novaPortaComPresente) 
            } 
          />
        </Cartao>
        <Cartao bgcolor = "#28a085">
          <Link href = { `/jogo/${ quantidadePortas }/${ portaComPresente }` } passHref>
            <h2 className = { styles.link }>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
