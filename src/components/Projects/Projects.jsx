import { Card } from "../card/card"
import { CardM } from "../cardM/CardM"
import { CardV } from "../cardV/CardV"
import { Card2 } from "../card2/Card2"
import crescent from '../../../public/assets/crescentMall.webp'
import pizza from '../../../public/assets/pizzaHut.png'
import bakuPod from '../../../public/assets/bakuPod.png'
import fomo from '../../../public/assets/fomoBaku.png'
import evrascon from "../../../public/assets/evrascon.png"
import mehkeme from "../../../public/assets/aliMehkeme.png"
import bankOfBaku from "../../../public/assets/bankOfBaku.png"
import sabirabad from "../../../public/assets/sabirabad.png"
import yardim from "../../../public/assets/yardimEt.png"
import xaribulbul from "../../../public/assets/xaribulbul.png"
import nazirlik from "../../../public/assets/nazirlik.png"
import access from "../../../public/assets/myAccess.png"
import azerlotoreya from "../../../public/assets/azerlotoreya.png"
import muzey from "../../../public/assets/muzey.png"
import hokumetOdenis from "../../../public/assets/hokumetOdenis.png"
import emal from "../../../public/assets/muracietEmal.png"
import seyahet from "../../../public/assets/seyehet2.png"
import satinalmalar from "../../../public/assets/satinalmalar.png"
import video from "../../../public/assets/seyehet.mp4"

const Projects = () => {
  return (
    <div className="projects">

    <div className="item1">
        <div className="img"
        style={{ backgroundColor: "rgb(17, 0, 255)", padding: "30px"}}>
            <img src={crescent} alt="Crescent Mall" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'korporativ'} | {'vebsayt'}</p>
            <h2>{'Crescent Mall'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'100 -dən çox dünya markaları, ailəvi əyləncədən tutmuş yeni konseptli restoranlar, oyuncaq və uşaq mağazalarından ev alış-verişinə və sağlamlıq mərkəzi ilə şəhər həyatının nəbzi burada döyünəcək. Crescent Mall-da yaşayacağınız yeni təcrübələr ilə alış-veriş və əyləncə mərkəzinin bir hissəsi olun!'}</p>
        </div>
    </div>

    <div className="item2">
    <div className="img"
        style={{ backgroundColor: "rgb(255, 0, 0)", padding: "30px"}}>
            <img src={pizza} alt="PizzaHut" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'korporativ'}</p>
            <h2>{'Pizza Hut'}</h2>
        </div>
    </div>
    
    <div className="item3">
    <div className="img"
        style={{ backgroundColor: "rgb(255, 0, 255)", padding: "30px"}}>
            <img src={bakuPod} alt="BakuPod" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'korporativ'} | {'vebsayt'}</p>
            <h2>{'Baku Pod'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'“Bakuprod” MMC 2015-ci ildən bəri Azərbaycanın qida məhsulları sektorunda fəaliyyət göstərən lider şirkətdir.'}</p>
        </div>
    </div>

    <div className="item4">
    <div className="img"
        style={{ backgroundColor: "rgb(255, 0, 111)", padding: "30px"}}>
            <img src={fomo} alt="FomoBaku" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'korporativ'} | {'vebsayt'}</p>
            <h2>{'FOMO BAKU'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Bakının mərkəzində yerləşən FOMO qlobal gecə klublarının mənzərəsini dəyişməsini hədəfləyib. Ən müasir texnologiya ilə təchiz edilmiş FOMO inanılmaz immersiv təcrübə vəd edir.'}</p>
        </div>
    </div>

    <div className="item5">
    <div className="img"
        style={{ backgroundColor: "rgb(0, 183, 255)", padding: "30px"}}>
            <img src={evrascon} alt="evrascon" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'korporativ'} | {'vebsayt'}</p>
            <h2>{'Evrascon'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'The leading project development and construction company from Azerbaijan, 56 years in the making.'}</p>
        </div>
    </div>

    <div className="item6">
    <div className="img"
        style={{ backgroundColor: "rgb(0, 183, 255)", padding: "30px"}}>
            <img src={mehkeme} alt="mehkeme" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'dovlet'} | {'vebsayt'}</p>
            <h2>{'Azərbaycan Respublikasının Ali Məhkəməsi'}</h2>
        </div>
    </div>

    <div className="item7">
    <div className="img"
        style={{ backgroundColor: "rgb(0, 110, 255)", padding: "30px"}}>
            <img src={bankOfBaku} alt="bankOfBaku" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'korporativ'} | {'vebsayt'}</p>
            <h2>{'Bank of Baku'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Bankın yenilənmiş veb-saytı fəaliyyətdədir.'}</p>
        </div>
    </div>

    <div className="item8">
    <div className="img"
        style={{ backgroundColor: "rgb(102, 25, 25)", padding: "30px"}}>
            <img src={sabirabad} alt="sabirabad" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'dovlet'} | {'muzey'}</p>
            <h2>{'Sabirabad Rayon Tarix-Diyarşünaslıq Muzeyi'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Muzey tarixi-mədəni irsimizi qoruyub saxlayan məkandır'}</p>
        </div>
    </div>

    <div className="item9">
    <div className="img"
        style={{ backgroundColor: "rgb(225, 25, 25)", padding: "30px"}}>
            <img src={yardim} alt="yardim" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'vebsayt'} | {'korporativ'}</p>
            <h2>{'"Yardım!Et"'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'100 ildən artıq şanlı tarixə malik Azərbaycan Qızıl Aypara Cəmiyyəti Respublikada dövlət qanunu ilə rolu müəyyən olunmuş ən böyük humanitar təşkilatdır. Cəmiyyət dünyanın ən nəhəng humanitar qurumu olan Beynəlxalq Qızıl Xaç və Qızıl Aypara Hərəkatının ölkəmizdə tam və bərabərhüquqlu üzvüdür.'}</p>
        </div>
    </div>

    <div className="item10">
    <div className="img"
        style={{ backgroundColor: "rgb(84, 24, 85)", padding: "30px"}}>
            <img src={xaribulbul} alt="xaribulbul" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'vebsayt'} | {'korporativ'}</p>
            <h2>{'V "XARIBÜLBÜL" Beynəlxalq folklor festivalı'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'2022-ci ildə Şuşa şəhərində keçirilən beynəlxalq folklor festivalı'}</p>
        </div>
    </div>

    <div className="item11">
    <div className="img"
        style={{ backgroundColor: "rgb(11, 77, 146)", padding: "30px"}}>
            <img src={nazirlik} alt="nazirlik" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'vebsayt'} | {'dovlet'}</p>
            <h2>{'Azərbaycan Respublikasının İqtisadiyyat Nazirliyi'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Azərbaycan Respublikasının İqtisadiyyat Nazirliyinin yenilənmiş veb-saytı fəaliyyətdədir.'}</p>
        </div>
    </div>

    <div className="item12">
    <div className="img"
        style={{ backgroundColor: "rgb(84, 24, 85)", padding: "30px"}}>
            <img src={access} alt="access" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'tətbiqetmə'} | {'korporativ'}</p>
            <h2>{'"myAccess mobile" AccessBank CJSC'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Köçürmə, ödəniş və hesabları eyni anda idarə edən mobil tətbiq istifadədədir.'}</p>
        </div>
    </div>

    <div className="item13">
    <div className="img"
        style={{ backgroundColor: "rgb(24, 63, 85)", padding: "30px 30px 0 30px"}}>
            <img src={azerlotoreya} alt="azerlotoreya" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'korporativ'} | {'tətbiqetmə'}</p>
            <h2>{'"Azerlotereya"'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Rəqəmsal yenilənmənin oyuna tətbiqi artıq mümkündür.'}</p>
        </div>
    </div>

    <div className="item14">
    <div className="img"
        style={{ backgroundColor: "rgb(147, 59, 32)", padding: "30px"}}>
            <img src={muzey} alt="muzey" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'muzey'} | {'dovlet'}</p>
            <h2>{'Bülbülün Ev-Muzeyi'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Muzey mənəvi dəyərləri toplayan, qoruyan və təbliğ edən məkandır.'}</p>
        </div>
    </div>

    <div className="item15">
        <div className="img"
             style={{ backgroundColor: "rgb(84, 24, 85)", padding: "30px"}}>
            <img src={hokumetOdenis} alt="hokumetOdenis" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'vebsayt'} | {'dovlet'}</p>
            <h2>{'"Hökumət Ödəniş Portalı"'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Hökumət Ödəniş Portalının qurulması zamanı qarşımıza qoyduğumuz əsas məqsəd böyük funksionallı portalın istifadəçilər üçün maksimum rahat olması idi.'}</p>
        </div>
    </div>

    <div className="item16">
    <div className="img"
        style={{ backgroundColor: "rgb(24, 47, 85)", padding: "30px"}}>
            <img src={emal} alt="emal" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'sistem'} | {'dovlet'}</p>
            <h2>{'Heydər Əliyev Fondu “Müraciətlərin emal sistemi”'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Sistem vətəndaşların müraciətlərinin qəbulu, cavablandırılması, həyata keçirilməsi və ümumi işin prosesini sürətləndirmək üçün nəzərdə tutulub.'}</p>
        </div>
    </div>

    <div className="item17">
        <video autoPlay muted>
            <source src={video}/>
        </video>
        <div>
            <p>{'vebsayt'} | {'korporativ'}</p>
            <h2>{'Sənət kainatına səyahət'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'Azərbaycan Milli İncəsənət Muzeyinə bir daha qayıtdıq, bu dəfə Galaxy S21 Ultra ilə!'}</p>
        </div>
    </div>

    <div className="item18">
    <div className="img"
        style={{ backgroundColor: "rgb(24, 47, 85)", padding: "30px"}}>
            <img src={satinalmalar} alt="satinalmalar" style={{ width: "100%", borderRadius: "8px" }} />

        </div>
        <div>
            <p>{'dovlet'}</p>
            <h2>{'"Dövlət satınalmaları" portalı'}</h2>
            <p style={{ flexWrap: "wrap" , maxWidth: "500px"}}
            >{'"Dövlət satınalmaları haqqında" Azərbaycan Respublikasının Qanununda 28 dekabr 2018-ci il tarixində edilmiş dəyişikliyə əsasən ehtimal məbləği 50 min AZN - 3 milyon dollar (5.1 milyon AZN) arasında olan tenderlərin elektronlaşdırılması nəzərdə tutulmuşdur. Buna əsasən Elektron Hökumətin İnkişafı Mərkəzinin təşkilatçılığı ilə etender.gov.az dövlət satınalmaların vahid internet portalı yaradılmışdır.'}</p>
        </div>
    </div>

    </div>
  )
}

export default Projects