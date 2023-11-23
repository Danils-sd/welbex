import style from "./HeaderBlock.css";

function HeaderBlock(){
    return(
        <div className="HeaderBlock">
            <div className="logoBlock">
                <div className="logoSVGS">
                    <img src="icons/part1.png" className="logoOne"/>
                    <img src="icons/part2.png" className="logoTwo"/>
                </div>
                <span className="logoText">
                    крупный интегратор CRM в Росcии и ещё 8 странах
                </span>
            </div>
            <nav className="navBar">
                <span className="navBtn">Услуги</span>
                <span className="navBtn">Виджеты</span>
                <span className="navBtn">Интеграции</span>
                <span className="navBtn">Кейсы</span>
                <span className="navBtn lastnavbtn">Сертификаты</span>
            </nav>
            <span className="numberHed">+7 555 555-55-55</span>
            <div className="contacts">
                <img src="icons/telegram.svg" className="contact"/>
                <img src="icons/viber.svg" className="contact"/>
                <img src="icons/whatsapp.svg" className="contact"/>
            </div>
        </div>
    )
}
export default HeaderBlock;
