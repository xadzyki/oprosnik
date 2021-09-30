import React from "react";
import { Component } from "react";
import ConfirmPoliticalBut from "./buttons/buttons";
import FirstPage from "./firstPage/firstPage";
import './style.css'

export default class FirstMain extends Component{
    constructor(){
        super()
        this.confirmPoliticalBut = this.confirmPoliticalBut.bind(this)
    }

    confirmPoliticalBut(){
        console.log('Conf');
        this.props.confirmPol();
    }

    render(){
    return(
        <main>
            <FirstPage/>
            <ConfirmPoliticalBut ConfirmPoliticalBut = {this.confirmPoliticalBut}/>
        </main>
    )}
}