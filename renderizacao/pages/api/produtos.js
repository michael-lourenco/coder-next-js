export default function handler(req, res) {
  res.status(200).json(
    [
      {
        id: 1,
        nome: 'Caneta',
        preco: 5.60,
      },
      {
        id: 2,
        nome: 'Mochila',
        preco: 102.30,
      },
      {
        id: 3,
        nome: 'Régua',
        preco: 7.40,
      },
      {
        id: 4,
        nome: 'Lápis',
        preco: 1.80,
      },
    ]
  )
}