import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notificacoes() {
  const { alternarTema} = useAppData()

  return (
    <div>
      <Layout 
        titulo = 'Notificações' 
        subtitulo = 'Gerenciamento de nofificacoes'
      >
          <button onClick={ alternarTema }>alternar tema</button>
      </Layout>     
    </div>
  )
}
