import "./adv.css"



export function Adv() {
    return (
        <div className="advantages">
                <h3>Üstünlüyümüz</h3>
                <div className="info">
                        <div className="mehsulSektor">
                            <img src="../../../public/assets/box.png" alt="boxes" />
                            <h4>Məhsul yanaşması</h4>
                            <p>Hər şey istehlakçıların tələblərinin öyrənilməsi ilə başlayır. Yaratdığımız məhsullar analiz zamanı əldə etdiyimiz məlumatlar və böyük bazar təcrübəsindən əldə etdiyimiz biliklər əsasında hazırlanır.</p>
                        </div>
                        <div className="mehsulSektor">
                            <img src="../../../public/assets/docs.png" alt="docs" />
                            <h4>Dövlət sektoru və böyük biznes</h4>
                            <p>Sektora xas olan yüksək təhlükəsizlik tələbləri, dövlət standartları ilə sənədləşmələr, mürəkkəb təsdiq sistemləri ilə böyük iş təcrübəmiz var, büdcə və iş vaxtını effektiv idarə edirik.</p>
                        </div>
                </div>
        </div>
    )
}