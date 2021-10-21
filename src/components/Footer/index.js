import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        var style = {
            backgroundColor: "#3d1308", //darkred from css variables. idk if i can import that here
            color: "#9f2042", //Light red from css variables
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
        }
        
        var phantom = {
          display: 'block',
          padding: '20px',
          height: '60px',
          width: '100%',
        }

        var icons ={
            color: '#9f2042', //Light red from css variables
            marginLeft: '20px'

        }
        return (
            <div>
            <div style={phantom}></div>
            <div style={style}>Fueled by Caffiene   <a style={icons} href="https://icons8.com">Icons</a></div>
            </div>
        )
    }
}