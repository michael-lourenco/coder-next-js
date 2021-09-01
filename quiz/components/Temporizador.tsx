import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
  key: any
  duracao: number
  tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className = { styles.temporizador }>
      <CountdownCircleTimer 
        duration = { props.duracao }
        size = { 120 }
        isPlaying
        onComplete = { props.tempoEsgotado }
        colors = {
          [
            ['#bce596', 0.33],
            ['#f7b801', 0.33],
            ['#ed827a', 0.33],
          ]
        }
      >
        { ({ remainingTime }) => remainingTime }
      </CountdownCircleTimer>
    </div>
  )
}