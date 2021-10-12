import React, { Component } from 'react';
import '../../App.css'
import icon from './img/chev-icon.png'

export default class About extends Component{
render(){
return(
<div className="card holder-card mx-auto">
    <div className="text-center p-3">
        <div className="accordion accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    About Me <img src={icon} alt="V" className="about-icon"/>
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body card accordion-card pt-1">Hi! I'm Ian and im looking for opportunities in coding.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Education <img src={icon} alt="V" className="about-icon"/>    
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body card accordion-card pt-1">
                    <ul>
                        <li>Deltona High School, Graduated with Superindentents Diploma of Distinction Honors</li>
                        <li>Seminole State, Graudated with an Associates Degree recieving Deans List Honors multiple times</li>
                        <li>UCF Coding Bootcamp</li>
                    </ul>
                </div>
                </div>
            </div>
            {/*
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Goals
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body card accordion-card pt-1">Honestly i just want a job to pay for my spotify premium</div>
                </div>
            </div> 
            */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Work History <img src={icon} alt="V" className="about-icon"/>
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body card accordion-card pt-1">I dont even have any relevant work history lmao, just pizza delivery</div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}    
};
