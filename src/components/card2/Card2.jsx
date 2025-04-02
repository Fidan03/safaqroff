import "./card2.css"


export function Card2(props) {
    
    return (
        <div className="cardContainer">
            <div className="card">
                <div className="img">
                    <img src={props.img}/>
                </div>
                <span>{props.desc1}</span>
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}