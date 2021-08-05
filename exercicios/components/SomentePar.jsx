export default function SomentePar(props){
  const numeroPar = props.numero % 2 === 0

  return (
    <div>

      {numeroPar ? 
        <span>{props.numero} </span> : 
        null
      }
    </div>
  )
}