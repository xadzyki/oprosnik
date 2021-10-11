import React, { Component } from "react";
import './style.css'


const aboutPol = '/aboutPol',
      main = '/opros'
export default class ConfirmPoliticalBut extends Component {
    render(){
    return (
        <div className="buttons">
            <a 
            href={main}
            className="sell"
            ><b>Отправить ответ</b></a>
            <p className="politic">Нажимая на кнопку, вы принимаете условия
                <br/><ins> <a href={aboutPol}>политики конфедициальности</a></ins></p>
        </div>
    )}
}