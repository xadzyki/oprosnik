import React, { Component } from "react";
import './style.css';

export default class Heading extends Component {
  render(){
    return (
      <>
        <div className="main-h1">
            <h1>Внимание!</h1>
            <p>Опрос состоит из {this.props.allAnswerCount} вопросов. В некоторых из них нужно выбрать ответ из заранее предложенных. Внимательное происхождение занимает не более 15-ти минут. Желаем Вам удачи!</p>
        </div>
      </>
    );}
}