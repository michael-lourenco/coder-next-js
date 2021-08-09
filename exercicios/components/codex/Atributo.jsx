import styles from "../../styles/codex/Atributo.module.css"

export default function Atributo(props){
  return (
    <div className = { styles.atributo }>
      <div className = { styles.sigla }>{props.sigla}</div>
      <div className = { styles.valor }>
        {props.valor}
      </div>
    </div>
  )
}