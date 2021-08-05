import styles from '../styles/Linha.module.css'
import Subdivisao from "./Subdivisao"

export default function Linha(props){
  return (
    <div className = {styles.linha}>
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
    </div>
  )
}