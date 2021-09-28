interface AuthInputProps {
  label: string
  valor: any
  obrigatorio?: boolean
  naoRenderizarQuando?: boolean
  tipo?: 'text' | 'email' | 'password'
  valorMudou: (novoValor: any) => void
}
export default function AuthInput(props: AuthInputProps) {
  return props.naoRenderizarQuando ? null : (
    <div className = {`
      flex
      flex-col
    `}> 
      <label> { props.label }</label>
      <input 
        type = { props.tipo ?? 'text' } 
        value = { props.valor }
        onChange = { e => props.valorMudou?.(e.target.value) }
        required = { props.obrigatorio ?? false }
      />
    </div>
  )
}