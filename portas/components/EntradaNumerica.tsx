
import styles from '../styles/EntradaNumerica.module.css'

interface EntradaNumericaProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function EntradaNumerica(props) {
  const decrementar = () => props.onChange(props.value - 1);
  const incrementar = () => props.onChange(props.value + 1);

  return (
    <div className = { styles.entradaNumerica }>
      <span className = { styles.text }> { props.text }</span>
      <span className = { styles.value }> { props.value }</span> 
      <div className = { styles.botoes }>
        <button className = { styles.btn } onClick = { decrementar } > - </button>
        <button className = { styles.btn } onClick = { incrementar } > + </button>
      </div>
    </div>
  )
}