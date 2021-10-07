import Image from 'next/image'
import router from 'next/router'
import loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function ForcarAutenticacao(props) {
   
    const { carregando, usuario } = useAuth()

    function renderizarConteudo() { 
        return (
            <>
                { props.children }
            </>
        )
    }
    
    function renderizarCarregando() { 
        return (
            <div className = {`
                flex
                justify-center
                items-center
            `}>
                <Image src={ loading } />
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if(carregando) {
        return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null
    }
}