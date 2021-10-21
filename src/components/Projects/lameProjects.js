import React, { Component } from 'react';
import '../../App.css';
import img1 from './img/shirt-store.png';
import img2 from './img/portfolio.png';
import img3 from './img/chattin.png';

export default class Projects extends Component {
    render() {
        return (
            <body className="project-body">
            <div className="project-container">
                <img className="project-image" src={img1} alt="Image failed to load"></img>
                <div className="project-info"> 
                    <h1 className="project-text">Shirt Store</h1> 
                    <ul className="project-text">
                        <li className="project-text"> <a className="project-link" href="https://github.com/ienglehart/Shirt-Front">Link to Github</a></li>
                        <li className="project-text"><a className="project-link" href="https://shirts-front.herokuapp.com/">Link to Site</a></li>
                        <li className="project-text project-text-btm">A simple shirt storefront. This one was a bit of a personal interest, I have a shirt press that I use occasionally to print shirts and always thought it would be cool to actualy have a platform to sell them on.</li>
                    </ul>
                </div>
            </div> 
            <div className="project-container">
                <img className="project-image" src={img2} alt="Image failed to load"></img>
                <div className="project-info">
                    <h1 className="project-text">Resume Site</h1> 
                    <ul className="project-text">
                        <li className="project-text"><a className="project-link" href="https://github.com/ienglehart/react-portfolio">Link to Github</a></li>
                        <li className="project-text"><a className="project-link" href="">This is the site</a></li>
                        <li className="project-text">This one is a website resume which i thought would be fitting for an aspiring web developer to have.</li>
                    </ul> 
                </div>
            </div> 
            <div className="project-container">
                <img className="project-image" src={img3} alt="Image failed to load"></img>
                <div className="project-info"> 
                    <h1 className="project-text">Just Chattin'</h1> 
                    <ul className="project-text">
                        <li className="project-text"><a className="project-link" href="https://github.com/jcgom3/Just-Chattin">Github Link</a></li>
                        <li className="project-text"><a className="project-link" href="https://just-chattin.herokuapp.com/login">Live Site</a></li>
                        <li className="project-text">A Chat app using socket.io that me and some classmates from the UCF bootcamp made as a group project.</li>
                    </ul>
                </div>
            </div> 
            </body>  
        )
    }
}