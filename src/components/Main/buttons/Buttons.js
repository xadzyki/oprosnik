import React, { Component } from "react";
import './style.css';

// let countQuestion = 24,
//     maxQuestion = 24

let end = '/end';

function onChangeNext(bool, answerCount, maxCount) {
  if (bool && answerCount < maxCount){
    return 'next active'
  } else {
    return 'next deactive'
  }
}

function onChangePrev(answerCount) {
  if (answerCount>0){
    return 'prev'
  } else {
    return 'prev deactive'
  }
}

function onChangeLast(bool) {
  if (bool){
    return 'sell active_big'
  } else {
    return 'sell deactive_big noLink'
  }
}    

export default class Buttons extends Component {
  render(){
    if (this.props.answerCount < this.props.maxCount){
      return (
        <>
        <div className="buttons">
          <div className="nav">
             <button className={onChangePrev(this.props.answerCount)} onClick={this.props.prev}>Предыдущий вопрос</button>
             <button className={onChangeNext(this.props.goNextQuestion, this.props.answerCount, this.props.maxCount)} onClick={this.props.func}>Следующий вопрос</button>
          </div> 
          {/* {lastQuestion(this.props.answerCount, this.props.maxCount, inputChange, selectChange)}    */}
        </div>
        </>
    )} else {
      return (
        <>
          <div className="buttons">
          <a 
          href={end} 
          className={onChangeLast(this.props.goNextQuestion)} 
          onClick={this.props.sendAnswer}><b>Отправить ответ</b></a>
            <div className="nav">
              <button className={onChangePrev(this.props.answerCount)} onClick={this.props.prev}>Предыдущий вопрос</button>
              <button className={onChangeNext(this.props.goNextQuestion)} onClick={this.props.func}>Следующий вопрос</button>
            </div> 
          </div>
        </>
      )
    }
    ;}
  }