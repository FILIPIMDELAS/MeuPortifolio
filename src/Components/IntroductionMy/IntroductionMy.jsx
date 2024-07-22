import Buttons from '../Buttons/Buttons'
import Images from '../Images/Images'
import './IntroductionMy.css'
import MinhaFoto from '../ImgImagens/MinhaFoto.jpg'

export default function IntroductionMy(){
    return(
        <div className='IntroductionMy'>
            <div className='InformatationIntroduction'>
                <h6>Olá, eu sou Filipe Cristovam do Carmo</h6>
                <h1>Desenvolvedor <br /> Back End</h1>
                <Buttons conteudo="Contate Me" link="https://wa.me/5562981046068"/>
                <div className='ImgSocialMidias'>
                    <Images url="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-tillvbc0.png" description="Linkedin" link="https://www.linkedin.com/in/filipe-cristovam-6b5b7031a/"/>
                    <Images url="https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg" description="Github" link="https://github.com/FilipeDev-PT"/>
                </div>
            </div>
            <Images url={MinhaFoto} decription="Miha Foto"/>
        </div>
    )
}