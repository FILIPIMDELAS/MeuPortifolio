import './Images.css'

// eslint-disable-next-line react/prop-types
export default function Images({ url, description, link }){
    return(
        link ?
        <a href={link} target='_blank'>
            <img src={url} alt={description} />
        </a> 
        :
        <img src={url} alt={description} />
    )
}