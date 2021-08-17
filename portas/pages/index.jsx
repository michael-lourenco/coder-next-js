import Porta from "../components/Porta"

export default function Home() {
  return (
    <div style={{
      display: 'flex',
    }}>
      <Porta selecionada = { true } />
      <Porta selecionada = { false } />
      <Porta selecionada />
      <Porta />
    </div>
  )
}
