import Filho from "./Filho";

export default function Pai(props){
  return(
    <div>
      <Filho nome="Pedro" familia = {props.familia} />
      <Filho nome="Jose" familia = {props.familia} />
      <Filho {...props} nome="Maria" familia = {props.familia} />
    </div>
  )
}