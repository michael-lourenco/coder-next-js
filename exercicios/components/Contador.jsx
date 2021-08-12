import { Component } from 'react'

export default class Contador extends Component {

  state = {
    numero: this.props.valorInicial ?? 0,
    passo : this.props.passo ?? 1,
  }

  incrementar = () => {
    this.setState({
      numero: this.state.numero + (this.state.passo ?? 1)
    })
  }

  decrementar = () => {
    this.setState({
      numero: this.state.numero - (this.state.passo ?? 1)
    })
  }

  alterarPasso = (ev) => {
    this.setState({
        passo : +ev.target.value,
      })
  }

  renderForm = () => {
   return ( 
    <>
      <input 
        type= "number" 
        min = "1" 
        max = "1000"
        value = { this.state.passo }
        onChange = { ev => this.alterarPasso(ev) }
      />
      <button onClick = { this.decrementar }> - </button>
      <button onClick = { this.incrementar }> + </button>
    </>
   )
  }

  render() {
    return (
      <div>
        <h1>Contador (usando classe)</h1>
        <h2>{ this.state.numero }</h2>
        { this.renderForm() }
      </div>
    )
  }
}
