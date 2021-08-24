export default function handler(req, res) {
  const { id } = req.query

  res.status(200).json({
    id: +id,
    nome: `João Almeida ${ id }`,
    email: `skjakljdklajs${ id }@gmail.com`
  })
}