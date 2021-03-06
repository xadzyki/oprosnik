import React from "react";
import img from './23.png';
import './style.css';

export default function FirstPage() {
    return(
        <>
            <div className="main-h1">
                <img src={img} alt=""/>
                <h1>Пройди опрос и помоги 
                    сделать мир лучше!</h1>
                <h4>Прими участие в масштабной акции от 
                    всемирной организации врачей</h4>

                <p>Опрос, который вы видите сейчас на экране своего устройства, реализован
                    фондом “врачи мира” и призван помочь организации для сбора информации в
                    целях реализаций стратегии профилактики против ВИЧ среди уязвимой группы.</p>

                <p>Мы убедительно просим вас внимательно читать вопросы, при ответе 
                    на вопрос использовать только правдивую информацию. Все ваши ответы
                    будут подвергаться анализу и формировать теоритическую базу для
                    разработки стратегий по профилактике против ВИЧ среди уязвимой группы.
                    Проходя данный опрос, вы помогаете делать этот мир лучше!</p>
                
            </div>
        </>
    )
}