import Buttons from '../Buttons/Buttons'
import Images from '../Images/Images'
import './Projects.css'

// eslint-disable-next-line react/prop-types
export default function Projects({ nome, descricao, imagem, linkP, linkR, image1, desc1, image2, desc2, image3, desc3, image4, desc4, image5, desc5 }){
    var style = {
        backgroundImage: "url(" + imagem + ")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '110%',
    }

    return(
        <div className='Projects'>
            <div className='iconImg'>
                {image1 ? <Images url={image1} description={desc1}/> : <Images url="" description=""/>}
                {image2 ? <Images url={image2} description={desc2}/> : <Images url="" description=""/>}
                {image3 ? <Images url={image3} description={desc3}/> : <Images url="" description=""/>}
                {image4 ? <Images url={image4} description={desc4}/> : <Images url="" description=""/>}
                {image5 ? <Images url={image5} description={desc5}/> : <Images url="" description=""/>}
            </div>
            <div className='imgDoProjeto' style={ style }></div>
            <div className='ContentProjeto'>
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <div className='ButtonsProjects'>
                    <Buttons conteudo="Ver Projeto" link={linkP}/>
                    <Buttons conteudo="Repositório" link={linkR}/>
                </div>
            </div>
        </div>
    )
}