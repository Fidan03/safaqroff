import "./CardM.css"


export function CardM(props) {
    return (
        <div className="cardContainer">
            <div className="card">
                <div className="image">
                    <img src={props.img}/>
                </div>
                <span>{props.desc1}</span>
                <span>{props.desc2}</span>
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}