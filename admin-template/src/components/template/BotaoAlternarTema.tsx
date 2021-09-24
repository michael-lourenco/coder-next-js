import { IconeLua, IconeSol } from '../icons'

interface BotaoAlternarTemaProps {
  tema: string
  alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps){
  return props.tema === 'dark' ? (
    <div 
      onClick = { props.alternarTema } 
      className = {`
        
      `}>
      <div className = {`
        
      `}>
        { IconeSol }
      </div>
      <div className = {`
        
      `}>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div onClick = { props.alternarTema }>
      { IconeSol }
    </div>
  )
}