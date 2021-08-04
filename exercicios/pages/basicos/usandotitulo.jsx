import Titulo from '../../components/Titulo'
export default function usandoTitulo(){
  return (
    <>
      <Titulo 
        principal = "Titulo Sem Pequeno"
        secundario = "Titulo secundario"
      />
      <Titulo 
        principal = "Titulo Com true declarado"
        secundario = "Titulo secundario"
        pequeno = {true}
      />
      <Titulo 
        principal = "Titulo com true, mas nao declarado"
        secundario = "Titulo secundario"
        pequeno
      />
    </>
  )
}