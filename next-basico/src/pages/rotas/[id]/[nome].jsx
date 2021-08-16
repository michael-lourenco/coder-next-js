import { useRouter } from 'next/router'

export default function IdNome() {
  const router = useRouter()

  const { id, nome } = router.query

  console.log(router.query)
  return(
    <div>Rotas / { id } / { nome } </div>
  )
}