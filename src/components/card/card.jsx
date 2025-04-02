import "./cardStyle.css";


export function Card(props) {
    
    return (
        <div className="cardContainer">
            <div className="card">
                <div className="img">
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


