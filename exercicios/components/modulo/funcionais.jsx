export function Comp1() {
  return (
    <div>
      <h2>Comp #01</h2>
    </div>
  )
}

export const Comp2 = function() {
  return  (
    <div>
      <h2>Comp #02</h2>
    </div>
  )
}

export default function Comp3() {
  return  (
    <div>
      <h2>Comp #03</h2>   
    </div>
  )
}

export const Comp4 = () => {
  return (
    <div>
      <h2>comp #04</h2>
    </div>
  )
}

const Comp5 = () => <h2>Comp #05</h2>

const Comp6 = props => (
  <div>
    <h2>Comp #06  { props.msg ?? '' }</h2>
  </div>
)

export {
  Comp5, 
  Comp6,
}