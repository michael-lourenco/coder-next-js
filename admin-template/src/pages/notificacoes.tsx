import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notificacoes() {
  const dados = useAppData()

  return (
    <div>
      <Layout 
        titulo = 'Notificações' 
        subtitulo = 'Gerenciamento de nofificacoes'
      >
          <h3>{ dados.nome }</h3>
      </Layout>     
    </div>
  )
}
