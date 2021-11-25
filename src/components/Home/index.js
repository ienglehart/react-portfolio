import React, { Component } from 'react';
import '../../App.css'
import './home.css'
  
export default class Home extends Component{
render(){
return(
 <div className="home-gradient">

    <h1 className="home-title">    Ian Englehart  </h1>

    <ul className="home-buttons">
        <li className="home-btn">About</li>
        <li className="home-btn">Projects</li>
        <li className="home-btn">Contact</li>
    </ul>

 </div>
)
}    
};