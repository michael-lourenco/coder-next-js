import { useState } from "react"

export default function Mouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  
  const estilo = {
    backgroundColor:"#222",
    color: "#fff",
    height:"100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center"
  }

  function quandoMover(ev) {
    setX(ev.clientX)
    setY(ev.clientY)
  }

  return (
    <div style ={estilo} onMouseMove = {quandoMover} >
      <div>
        Eixo X: {x}
      </div>
      <div>
        Eixo Y: {y}
      </div>
    </div>
  )  
}