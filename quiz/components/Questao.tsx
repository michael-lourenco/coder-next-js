import styles from '../styles/Questao.module.css'
import QuestaoModel from '../model/questao'

interface QuestaoProps {
  valor: QuestaoModel
}

export default function Questao(props) {
 const questao = props.valor

 return (
   <div>
     <h1>Questão</h1>
   </div>
 )
}