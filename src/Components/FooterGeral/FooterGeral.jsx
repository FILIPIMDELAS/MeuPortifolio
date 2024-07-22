import Images from '../Images/Images'
import './FooterGeral.css'

export default function FooterGeral(){
    return(
        <footer className='FooterGeral' id='FooterGeral'>
            <h3>CONTATOS</h3>
            <div>
                <div>
                    <Images url="https://cdn.icon-icons.com/icons2/112/PNG/512/html5_18891.png" description="Icone HTML5"/>
                    <h6>(62) 98104-6068</h6>
                </div>
                <div>
                    <Images url="https://cdn.icon-icons.com/icons2/112/PNG/512/html5_18891.png" description="Icone HTML5"/>
                    <h6>filipe.dev.contact@gmail.com</h6>
                </div>
            </div>
        </footer>
    )
}