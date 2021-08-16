export default function metodos (req, res){
  const { method } = req

  if(method === 'GET'){
    res.status(200).json({
      nome:'Pedro'
    })
  } else if(method === 'POST') {
    res.status(200).json({
      nome:'Maria'
    })
  } else if(method === 'PUT') {
    res.status(200).json({
      nome:'Jose'
    })
  }
}