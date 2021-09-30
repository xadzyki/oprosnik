import React, { Component } from 'react';
import './App.css';
import EndMain from './components/endMain/EndMain';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';
import FirstMain from './components/firstMain/FirstMain';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPol from './components/About/AboutPol';

// let ChangeMain = this.state.compleatOpros?<Main sendAnswer={this.sendAnswer}/>:<EndMain/>
const Bounce = styled.div`animation: 0.5s ${keyframes`${fadeIn}` }`;

// const ChangeLast = (bool, func) => {
//   return !bool?<Main sendAnswer={func}/>:<EndMain/>
// }

// const ChangeMain = (confPolitical, sendOpros, propsQuest, propsConfPolitical) => {
//   if(confPolitical){
//     return ChangeLast(sendOpros, propsQuest) 
//   } else {
//     return <FirstMain confirmPol = {propsConfPolitical}/>
//   }
// }

export default class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     compleatOpros:false,
  //     confirmPolitical:false
  //   }
  //   this.sendAnswer = this.sendAnswer.bind(this)
  //   this.confirmPolitical = this.confirmPolitical.bind(this)
  // }
  // sendAnswer(){
  //   if(!this.state.compleatOpros){
  //   console.log('send')
  //   this.setState({
  //     compleatOpros:true
  //   })
  // } else{
  //   console.log('sended!!!!!')
  // }
  // }

  // confirmPolitical(){
  //   this.setState({
  //     confirmPolitical:true
  //   })
  // }
  
  render(){
  //  const propsAnswer = this.sendAnswer
  //  const propsConfPolitical = this.confirmPolitical
  return (
    <Bounce>
      <Header/>
      {/* <Bounce>{ChangeMain(this.state.confirmPolitical,this.state.compleatOpros, propsAnswer, propsConfPolitical)}</Bounce> */}
      <Router>
        <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/aboutPol' component={AboutPol}></Route>
        <Route path='/opros' component={Main}></Route>
        <Route path='/end' component={EndMain}></Route>
        <Route path='/' component={FirstMain}></Route>
        </Switch>
      </Router>
      <Footer/>
      
    </Bounce>
  );}
}
