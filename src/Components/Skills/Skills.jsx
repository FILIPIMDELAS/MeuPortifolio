import Images from '../Images/Images'
import './Skills.css'

export default function Skills(){
    return(
        <div className='Skills'>
            <h4>Skills</h4>
            <div className='Img'>
                <Images url="https://cdn.icon-icons.com/icons2/112/PNG/512/html5_18891.png" description="Icone HTML5"/>
                <Images url="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" description="Icone CSS3"/>
                <Images url="https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png" description="Icone JS"/>
                <Images url="https://res.cloudinary.com/practicaldev/image/fetch/s--8c91ke8T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8m64nayc4xxagczx92wt.png" description="Icone React"/>
                <Images url="https://cdn-icons-png.freepik.com/512/6132/6132221.png" description="Icone C#"/>
            </div>
        </div>
    )
}