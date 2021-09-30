import React, { Component } from "react";
import {fetchSurvey } from "../../data/Data";
import Buttons from "./buttons/Buttons";
import Heading from "./heading/Heading";
import Question from "./question/Question";
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';
import "./style.css";

const Bounce = styled.div`animation: 0.5s ${keyframes`${fadeIn}` }`;

let count = 0,
    dataSelectedAnswer = [],
    value='', text = '',
    dataSelectedText = [];
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      questionType: '',
      answerCount: 0,
      allAnswerCount: 2,
      answerText: '',
      questionVariants: {},
      data: "",
      isFatched: false,
      // selectAnswer:'',
      // selectText:'',
      goNextQuestion: false
    };
    this.nextQeustion = this.nextQeustion.bind(this);
    this.prevQeustion = this.prevQeustion.bind(this);
    this.sendAnswer = this.sendAnswer.bind(this);
    this.handleSelect=this.handleSelect.bind(this);
    this.handleInput=this.handleInput.bind(this);
  }
  

componentDidMount() {
  
  fetchSurvey().then((response) => {
    if (response.ok) {
      response.text().then((res) => {
        
        let data = JSON.parse(res)
        console.log(data[0].questions);
        this.setState({
          questionType:data[0].questions[this.state.answerCount].questionType,
          allAnswerCount:data.length,
          answerText:data[0].questions[this.state.answerCount].text,
          questionVariants:data[0].questions[this.state.answerCount].variants,
          data: data[0].questions,
          isFatched: true
        });
      });
    }
  });
}
handleSelect(event){
  value = event.target.value
  text = event.target.selectedOptions[0].text
  this.setState({
    // selectAnswer:value,
    // selectText:text,
    goNextQuestion:true
  })
  if(text===''){
    this.setState({
      goNextQuestion:false
    })
  }

  console.log(value)
  console.log(text)
}

handleInput(event) {
  value = event.target.id
  text = event.target.value
  this.setState({
    // selectText:text,
    // selectAnswer:value,
    goNextQuestion:true
  })
  if(text===''){
    this.setState({
      goNextQuestion:false
    })
  }
  console.log(value)
  console.log(text)
  console.log(this.state.goNextQuestion)
}

async nextQeustion() {
  if ((this.state.answerCount < this.state.allAnswerCount) && this.state.goNextQuestion) {
      count++;
      dataSelectedAnswer.push(value);
      dataSelectedText.push(text);
      let data = this.state.data;
      this.setState({
      answerCount: count,
      questionType: data[count].questionType,
      goNextQuestion:false
    });
    value = ''
    text = ''
    console.log(dataSelectedAnswer, dataSelectedText)
  }
  console.log(this.state.goNextQuestion)
  console.log(this.state.questionType)
}

prevQeustion() {
  if (this.state.answerCount > 0) {
    count--;
    let data = this.state.data;
    dataSelectedAnswer.pop();
    dataSelectedText.pop();
    this.setState({
      answerCount: count,
      questionType: data[count].questionType,
      goNextQuestion:false
    });
    value = ''
    text = ''
  }
  console.log(this.state.answerCount);
}

sendAnswer() {
  if(this.state.goNextQuestion){
  dataSelectedAnswer.push(value);
  dataSelectedText.push(text);
  
  for(let i = 0; i<dataSelectedAnswer.length;i++){
    var res = fetch('https://thesurvey20210930185220.azurewebsites.net/answers/create/', {
      method:"PUT",
      body:JSON.stringify({
          "variantId": dataSelectedAnswer[i],
          "text": dataSelectedText[i]
      })
  })
  console.log(res)
    console.log(dataSelectedAnswer[i]);
    console.log(dataSelectedText[i]);
  }
  console.log(dataSelectedAnswer)
  console.log(dataSelectedText)
  alert("send Answer!");
}
}

  render() {
    
    if(!this.state.isFatched){
      return (
        <>
        <div>
          <p>загрузка</p>
        </div>
        </>
      )
    } else {
      let answerCount = this.state.answerCount
      return (
        <Bounce>
          <Heading allAnswerCount={this.state.allAnswerCount} />
          <Question
            questionType={this.state.questionType}
            answerCount={answerCount}
            answerText={this.state.answerText}
            questionVariants={this.state.questionVariants}
            getSelect={this.handleSelect}
            getInput={this.handleInput}
          />
          <Buttons
            answerCount={answerCount}
            maxCount={this.state.allAnswerCount}
            func={this.nextQeustion}
            prev={this.prevQeustion}
            sendAnswer={this.sendAnswer}
            goNextQuestion={this.state.goNextQuestion}
          />
        </Bounce>
      );
    }    
  }
}
