export default function Params(req, res){
  res.status(200).json({
    params: req.query
  })
}