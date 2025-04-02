import "./nav.css";


export function Nav() {
    return (
        <div className="nav">
            <div className="logo">
                <img src="../../../public/assets/logo.jpeg" alt="Logo" />
            </div>
            <div className="info">
                <div className="details">
                    <ul>
                        <li><a href="#">Biz kimik?</a></li>
                        <li><a href="#">Layiheler</a></li>
                        <li><a href="#">Bloq</a></li>
                        <li><a href="#">Layihem var</a></li>
                    </ul>
                </div>
                <div className="btn">
                    <button>Layihəm var</button>
                </div>
            </div>
        </div>
    )
}