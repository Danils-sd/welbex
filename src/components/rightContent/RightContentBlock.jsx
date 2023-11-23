import style from "./RightContentBlock.css";

function RightContentBlock(){
    return(
        <div className="rightContentBlock">
            <span className="rightMainText">Вместе с <span className="gradient">бесплатной консультацией</span> мы дарим:</span>
            <div className="optionMenu">
                <div className="option">
                    <span className="optionF">Виджеты</span>
                    <span className="optionS">30 готовыхр ешений</span>
                </div>
                <div className="option">
                    <span className="optionF">Dashboard</span>
                    <span className="optionS">с показателями вашего бизнеса</span>
                </div>
                <div className="option">
                    <span className="optionF">Skype Аудит</span>
                    <span className="optionS">отдела продажи CRM системы</span>
                </div>
                <div className="option">
                    <span className="optionF">35 дней</span>
                    <span className="optionS">использования CRM</span>
                </div>
                <div className="optionM">
                    <span className="optionFM"><span className="chertM">-</span>Skype аудит</span>
                </div>
                <div className="optionM">
                    <span className="optionFM"><span className="chertM">-</span>30 виджетов</span>
                </div>
                <div className="optionM">
                    <span className="optionFM"><span className="chertM">-</span>Dashboard</span>
                </div>
                <div className="optionM">
                    <span className="optionFM"><span className="chertM">-</span>Месяц аmoCRM</span>
                </div>
            </div>
            <span className="optBtn">Получить консультацию</span>
        </div>
    )
}

export default RightContentBlock;