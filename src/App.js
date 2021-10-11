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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPol from './components/About/AboutPol';
import Email from './components/email/email';

const Bounce = styled.div`animation: 0.5s ${keyframes`${fadeIn}` }`;

export default class App extends Component{
  
  render(){
  return (
    <Bounce>
      <Header/>
      <Router>
        <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/aboutPol' component={AboutPol}></Route>
        <Route path='/opros' component={Main}></Route>
        <Route path='/end' component={EndMain}></Route>
        <Route path='/email' component={Email}></Route>
        <Route path='/' component={FirstMain}></Route>
        </Switch>
      </Router>
      <Footer/>
      
    </Bounce>
  );}
}
