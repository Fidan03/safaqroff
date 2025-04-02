import "./cardV.css"
import video from "../../../public/assets/seyehet.mp4"



export function CardV(props) {
    
    return (
        <div className="videoContainer">
            <div className="card">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
                <span>{props.desc1}</span>
                <span>{props.desc2}</span>
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}