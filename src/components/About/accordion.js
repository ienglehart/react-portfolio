import React, { Component } from 'react';
import '../../App.css'


export default class About extends Component{
    render(){
    function clickHandler(e){
        var i;
        for (i = 0; i < 3; i++) {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            e.classList.toggle("active");
          
            /* Toggle between hiding and showing the active panel */
            var panel = e.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    };

    return(
        <div>
            <button className="accordion" onClick={clickHandler}>section1</button>
            <div className="acc-panel">
                <p>panel content</p>
            </div>

            <button className="accordion">section2</button>
            <div className="acc-panel">
                <p>panel content</p>
            </div>

            <button className="accordion">section3</button>
            <div className="acc-panel">
                <p>panel content</p>
            </div>
        </div>
    )  
}
};
