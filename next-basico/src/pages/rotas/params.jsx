import { useRouter } from 'next/router'

export default function Params() {
  const router = useRouter()

  const { id, nome } = router.query

  return (
    <div>
      Rotas Params : id > { id } nome > { nome }

    </div>
  )
}