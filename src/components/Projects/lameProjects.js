import React, { Component } from 'react';
import '../../App.css';
import wario1 from './img/wario1.png';
import wario2 from './img/wario2.png';
import wario3 from './img/wario3.png';

export default class Projects extends Component {
    render() {
        return (
            <body className="project-body">
            <div className="project-container">
                <img className="project-image" src={wario1} alt="wario1"></img>
                <div className="project-info"> 
                    <h1 className="project-text">Shirt Store</h1> 
                    <ul className="project-text">
                        <li className="project-text">github link :)</li>
                        <li className="project-text">live site link ::))</li>
                        <li className="project-text">description :::)))</li>
                    </ul>
                </div>
            </div> 
            <div className="project-container">
                <img className="project-image" src={wario2} alt="wario2"></img>
                <div className="project-info">
                    <h1 className="project-text">Resume Site</h1> 
                    <ul className="project-text">
                        <li className="project-text">github link :)</li>
                        <li className="project-text">YOURE NEXT WORDS ARE: IM ON THIS SITE</li>
                        <li className="project-text">description :::)))</li>
                    </ul> 
                </div>
            </div> 
            <div className="project-container">
                <img className="project-image" src={wario3} alt="wario3"></img>
                <div className="project-info"> 
                    <h1 className="project-text">Weather App</h1> 
                    <ul className="project-text">
                        <li className="project-text">github link :)</li>
                        <li className="project-text">live site link ::))</li>
                        <li className="project-text">description :::)))</li>
                    </ul>
                </div>
            </div> 
            </body>  
        )
    }
}