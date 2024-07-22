import Buttons from '../Buttons/Buttons'
import Images from '../Images/Images'
import Logo from '../ImgImagens/Logo.svg'
import './HeaderGeral.css'

export default function HeaderGeral(){
    const url = "../../../public/Curriculo.pdf"
    return(
        <header className='HeaderGeral'>
            <Images url={Logo} link="" description="Imagem Aleatoria"/>
            <div className='divButonsHeader'>
                <Buttons conteudo="Sobre" link="#AboutMe"/>
                <Buttons conteudo="Skills" link="#Skills"/>
                <Buttons conteudo="Projetos" link="#divProjects"/>
                <Buttons conteudo="Contatos" link="#FooterGeral"/>
                <button className='buttonCurriculo' onClick={() => window.open(url, '_blank')}>Curriculo</button>
            </div>
        </header>
    )
}