import questoes from '../bancoDeQuestoes'

export default (req, res) => {
  const { id } = req.query

  res.status(200).json(questoes[0].paraObjeto())
}