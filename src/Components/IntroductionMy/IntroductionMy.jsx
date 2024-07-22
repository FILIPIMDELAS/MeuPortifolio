import Buttons from '../Buttons/Buttons'
import Images from '../Images/Images'
import './IntroductionMy.css'

export default function IntroductionMy(){
    return(
        <div className='IntroductionMy'>
            <div className='InformatationIntroduction'>
                <h6>Olá, eu sou Filipe Cristovam do Carmo</h6>
                <h1>Desenvolvedor <br /> Back End</h1>
                <Buttons conteudo="Contate Me"/>
                <div className='ImgSocialMidias'>
                    <Images url="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-tillvbc0.png" description="Linkedin" link="https://br.linkedin.com"/>
                    <Images url="https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg" description="Github" link="https://github.com"/>
                </div>
            </div>
            <Images url="https://us-tuna-sounds-images.voicemod.net/ad447514-1b49-446e-8b97-e624bbafe1a5-1718038034259.png" decription="Miha Foto"/>
        </div>
    )
}