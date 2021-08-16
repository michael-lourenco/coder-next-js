import { useRouter } from 'next/router'
import Link from 'next/link'

export default function IdNome() {
  const router = useRouter()

  const { id, nome } = router.query

  console.log(router.query)
  return(
    <div>
      <h1>
        Rotas / { id } / { nome } 
      </h1>
      <Link href='../../rotas'>
        <button>Voltar</button>
      </Link> 
    </div>
  )
}