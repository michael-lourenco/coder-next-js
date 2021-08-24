function numeroAleatorio(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        id: numeroAleatorio(),
        nome: 'Caneta',
        preco: 5.60,
      },
      {
        id: numeroAleatorio(),
        nome: 'Mochila',
        preco: 102.30,
      },
      {
        id: numeroAleatorio(),
        nome: 'Régua',
        preco: 7.40,
      },
      {
        id: numeroAleatorio(),
        nome: 'Lápis',
        preco: 1.80,
      },
    ]
  )
}