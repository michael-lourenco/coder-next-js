import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Buscar() {
  const router = useRouter()

  const { id } = router.query

  console.log(router.query)
  return(
    <div>
      <h1>Rotas / { id } / buscar !!!</h1>
      <Link href='../../rotas'>
        <button>Voltar</button>
      </Link>
    </div>
  )
}