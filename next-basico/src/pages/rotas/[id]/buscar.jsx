import { useRouter } from 'next/router'

export default function buscar() {
  const router = useRouter()

  const { id } = router.query

  console.log(router.query)
  return(
    <div>Rotas / { id } / buscar !!!</div>
  )
}