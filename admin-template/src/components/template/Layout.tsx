import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import MenuLateral from './MenuLateral'
import useAppData from '../../data/hook/useAppData'
// import ForcarAutenticacao from '../auth/ForcarAutenticacao'
import forcarAutenticacao from '../../functions/forcarAutenticacao'

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData()

  return forcarAutenticacao(
      <div className = {`
        ${ tema }
        flex
        h-screen
        w-screen
      `}>
        <MenuLateral />
        <div className = {`
          flex
          flex-col
          w-full
          hp-7
          bg-gray-300 
          dark:bg-gray-800
        `}>
          <Cabecalho 
            titulo = { props.titulo }
            subtitulo = { props.subtitulo }
          />
          <Conteudo>
            { props.children }
          </Conteudo>
        </div>
      </div>
  )
}
