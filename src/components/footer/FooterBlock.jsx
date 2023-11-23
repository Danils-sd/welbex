import style from "./FooterBlock.css";

function FooterBlock(){
    return(
        <div className="futerBlock">
            <div className="secF ff">
                <span className="glavP">О компании</span>
                <div className="inSec">
                    <span className="ppSec">Партнёрская компания</span>
                    <span className="ppSec">Вакансии</span>
                </div>
            </div>
            <div className="secF sf">
                <span className="glavP">Меню</span>
                <div className="inSecSec">
                    <div className="leftColumn">
                        <span className="ppSec">Расчёт стоимости</span>
                        <span className="ppSec">Услуги</span>
                        <span className="ppSec">Виджеты</span>
                        <span className="ppSec">Интеграции</span>
                        <span className="ppSec">Наши клиенты</span>
                    </div>
                    <div className="rightColumn">
                        <span className="ppSec">Кейсы</span>
                        <span className="ppSec">Благодарственные письма</span>
                        <span className="ppSec">Сертификаты</span>
                        <span className="ppSec">Блог на YouTube</span>
                        <span className="ppSec">Вопрос / Овет</span>
                    </div>
                </div>
            </div>
            <div className="secF thf">
                <span className="glavP">Контакты</span>
                <span className="ppSec frft">+7 555 555-55-55</span>
                <div className="contactsF">
                    <img src="icons/telegram.svg" className="contact"/>
                    <img src="icons/viber.svg" className="contact"/>
                    <img src="icons/whatsapp.svg" className="contact"/>
                </div>
                <span className="ppSec frft">Москва, Путевой проезд 3с1, к 902</span>
                <span className="anatF anatFF">©WELBEX 2022. Все права защищены.</span>
                <span className="anatF">Политика конфиденциальности</span>
            </div>
        </div>
    )
}

export default FooterBlock;