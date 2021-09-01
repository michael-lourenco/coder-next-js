import styles from '../styles/Resultado.module.css'
import  { useRouter } from 'next/router'
import Botao from '../components/Botao'
import Estatistica from '../components/Estatistica'

export default function Resultado(){
  const router = useRouter();

  const { certas, total } = router.query
  const percentual = Math.round((+certas / +total) * 100)

  return (
    <div className= { styles.resultado }>
      <h1>Resultado Final</h1>
      <div style= {{ display: 'flex',}}>
        <Estatistica texto = "Perguntas" valor = { total }/>
        <Estatistica 
          texto = "Certas" 
          valor = { certas }
          corFundo = "#9cd2a4"
        />
        <Estatistica 
          texto = "Percentual" 
          valor = { `${ percentual }%` }
          corFundo = "#de6a33"
        />
      </div>
      <Botao href="/" texto="Tentar Novamente" />
    </div>
  )
}