import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';
import './style.css';


const Bounce = styled.div`animation: 0.5s ${keyframes`${fadeIn}` }`;

function getQuestionOption(variantsAnswer) {
    return variantsAnswer.map((variant,i) => <option key={variant[i]} value={variant.id}>{variant.text}</option>)
}

export default class Question extends Component { 

    render(){
        if (this.props.questionType === 2){
            return (
                <>
                <Bounce><div className="question write">
                <p className="number">Вопрос №{this.props.answerCount + 1}</p>
                <p className="question-text">{this.props.answerText}</p>
                <input type="text"
                id={this.props.questionVariants[0].id}
                onChange ={this.props.getInput}
                />
            </div></Bounce>
            </>
            )
        } else if (this.props.questionType === 0) {
            return(
            <>
            <Bounce><div className="question choose">
                <p className="number">Вопрос №{this.props.answerCount + 1}</p>
                <p className="question-text">{this.props.answerText}</p>
                <select className="select-1" onChange={this.props.getSelect}>
                    <option selected disabled >{this.props.answerText}</option>
                    {getQuestionOption(this.props.questionVariants)}
                </select>
                </div></Bounce>
                </>
            )
        }
    };
}
