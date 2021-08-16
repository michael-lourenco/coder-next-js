import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Params() {
  const router = useRouter()

  const { id, nome } = router.query

  return (
    <div>
      <h1>
        Rotas Params : id > { id } nome > { nome }
      </h1> 
      <Link href='/rotas'>
        <button>Voltar</button>
      </Link>
    </div>
  )
}