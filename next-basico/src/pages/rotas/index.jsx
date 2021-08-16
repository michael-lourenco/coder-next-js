import Link from 'next/link'

export default function rotas() {
  return (
    <div>
      <h1>
        Rotas index
      </h1>
      <ul>
        <Link href="/rotas/params?id=12&nome=Ana">
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/123/Daniel">
          <li>Daniel</li>
        </Link>
      </ul>
    </div>
  )
}