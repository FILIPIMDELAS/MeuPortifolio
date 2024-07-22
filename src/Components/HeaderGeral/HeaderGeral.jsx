import Buttons from '../Buttons/Buttons'
import Images from '../Images/Images'
import Logo from '../ImgImagens/Logo.svg'
import './HeaderGeral.css'

export default function HeaderGeral(){
    return(
        <header className='HeaderGeral'>
            <Images url={Logo} link="" description="Imagem Aleatoria"/>
            <div className='divButonsHeader'>
                <Buttons conteudo="Home"/>
                <Buttons conteudo="Sobre"/>
                <Buttons conteudo="Skills"/>
                <Buttons conteudo="Projetos"/>
                <Buttons conteudo="Contatos"/>
            </div>
        </header>
    )
}