// array com n numeros aleartorios
// n pode ser entre 6 e 15
// cada numero pode estar entre 1 e 60
// exibir o resultado no centro da tela
// um numero ao lado do outro

import styles from "../../styles/megasena/Sorteio.module.css"
import Numero from "./Numero"

export default function Sorteio(props){

  const NUMEROS_MEGASENA = 61;

  function gerarArray(n){
    let arrayGerado = [];

    for(let i=1; i<n; i++){
      arrayGerado.push(i)
    }
    //console.log('ARRAY GERADO', arrayGerado);

    return arrayGerado;

  }

  function retirarUnico(arrayParaTirar, arrayGerado, quantidade ){
    console.log('VOLTA', quantidade);

    if(quantidade > 0){
      console.log('arrayPraTirar', arrayParaTirar);
      const result = arrayGerado ? arrayGerado : [];

      console.log('ARRAY FINAL', result)

      const indiceAleatorio = getRandomInt(0, arrayParaTirar.length -1)
      //console.log(`ARRAYPARATIRAR LENGTH ${arrayParaTirar.length -1}`)
      console.log(`INDICE ${indiceAleatorio}`)
      const numero = arrayParaTirar.indexOf(indiceAleatorio)
  
      console.log('numero', numero)

      const novoArray = arrayParaTirar.splice(numero, 1);
      
      console.log('novoArray', novoArray.toString())
      
      quantidade -= 1;
      
      result.push(novoArray[0]); 
      
      console.log('result', result.toString())
      return retirarUnico(arrayParaTirar, result, quantidade)
    }
    else{
      
      return arrayGerado 
    }
  }

  function Mega(quantidade){
    console.log('quantidade',quantidade)
    const arrayDeNumeros = gerarArray(NUMEROS_MEGASENA);
    //console.log('ARRAY GERADO', arrayDeNumeros)
    const arrayGeradoInicial = []
    const resultado = retirarUnico(arrayDeNumeros, arrayGeradoInicial, quantidade)

    return resultado
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const sorteio = Mega(props.quantidade);

  let numeros = sorteio.map((numero, index) => <Numero key={index} numero = {numero}/> )

  return (
    <div className = { styles.sorteio }>
        { numeros }
    </div>
  )
}