import Buttons from '../Buttons/Buttons'
import Images from '../Images/Images'
import './Projects.css'

// eslint-disable-next-line react/prop-types
export default function Projects({ nome, descricao, imagem, link }){
    var style = {
        backgroundImage: "url(" + imagem + ")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '110%',
    }

    return(
        <div className='Projects'>
            <div className='iconImg'>
                <Images url="https://cdn.icon-icons.com/icons2/112/PNG/512/html5_18891.png" description="Icone HTML5" className="icone1"/>
                <Images url="https://cdn.icon-icons.com/icons2/112/PNG/512/html5_18891.png" description="Icone HTML5" className="icone2"/>
            </div>
            <div className='imgDoProjeto' style={ style }></div>
            <div className='ContentProjeto'>
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <div className='ButtonsProjects'>
                    <Buttons conteudo="Ver Projeto" link={link}/>
                    <Buttons conteudo="Repositório" link={link}/>
                </div>
            </div>
        </div>
    )
}