const usuarios = [];

export default function Form(req, res){
  const { method } = req

  if( method === 'POST') {
    post(req, res)
  } else if( method === 'GET' ){
    get(req, res)
  } else{
    res.status(405).send()
  } 
}

function get(req, res) {
  res.status(200).json(usuarios)
}

function post(req, res) {
  const usuario = JSON.parse(req.body)
  usuarios.push(usuario)
  res.status(200).json()
}

