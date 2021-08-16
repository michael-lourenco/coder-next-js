import { useEffect, useState } from 'react'

export default function Questao() {
  const [questao,setQuestao] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/questao/123')
      .then(resp => resp.json())
      .then(questao => setQuestao(questao))
  },[])

  function renderizarRespostas() {
    if(questao) {
      return questao.respostas.map((resposta, i) => {
        return <li key={ i }> { resposta }</li>
      })
    }
  }

  return (
    <div>
      <h1>Questão</h1>
      <div>
        <span>{questao?.id} - { questao?.enunciado }</span>
        <ul>
          { renderizarRespostas() }
        </ul>
      </div>
    </div>
  )
}
