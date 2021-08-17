import styles from '../styles/Porta.module.css';

export default function Porta(props) {
  return(
    <div className={ styles.area }>
      <div className={ styles.estrutura }>
        <div className={ styles.porta }>
          <div className={ styles.numero }> 3 </div>
        </div>
      </div>
    </div>
  )
}