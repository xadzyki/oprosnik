import React from "react";
import './style.css';
import img from './img_end.png';


export default function EndMain() {
    return(
        <div className="endMain-h1">
            <h1>Спасибо!</h1>
            <p>Вы успешно прошли опрос, ваши ответы
                записаны и будут учитываться в создании
                стратегии по профилактике против ВИЧ</p>
                <img src={img} alt="EndMain"/>
        </div>
    )
}