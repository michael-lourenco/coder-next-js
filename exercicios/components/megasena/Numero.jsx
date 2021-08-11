import styles from "../../styles/megasena/Numero.module.css"

export default function Numero(props){

  return (
    <div className = { styles.numero }>
        {props.numero}
    </div>
  )
}