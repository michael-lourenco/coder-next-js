import Filho from "./Filho";

export default function Pai(props){

  function falarComigo(msg){
    console.log(msg)
  }

  return(
    <div>
      <Filho funcao = {falarComigo} />
    </div>
  )
}