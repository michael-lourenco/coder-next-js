export default function questao(req, res) {
  const { method } = req

  if( method === 'GET'){
    get(req, res)
  }else{
    res.status(405).send()
  }
}

function get(req, res){
  const { id } = req.query

  res.status(200).json({
    id,
    enunciado:'Qual sua cor preferida',
    respostas:[
      'branca',
      'vermelha',
      'amarela',
      'verde'
    ]
  })
}