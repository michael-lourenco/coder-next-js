import Lista from "../../components/Lista"
import Item from "../../components/Item"

export default function componenteComFilho(){
  return (
    <div>
      <Lista>
        <Item conteudo = "Item #01" />
        <Item conteudo = "Item #50" />
        <Item conteudo = "Item #08" />
      </Lista>
    </div>
  )
}