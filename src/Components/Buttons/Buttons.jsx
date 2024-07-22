import './Buttons.css'

// eslint-disable-next-line react/prop-types
export default function Buttons({ conteudo, link }){
    return (
        link ?
        <a href={link} target='_blank'><button className='Buttons'>{conteudo}</button></a>
        :
        <button className='Buttons'>{conteudo}</button>
    )
}