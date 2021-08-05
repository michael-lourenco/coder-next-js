import Estilo from "../../components/Estilo";

export default function usadoEstilo() {
  return (
    <div>
      <Estilo numero ={10} color="#000" />
      <Estilo numero ={-1} color="#fff" direita />
    </div>
  )
}