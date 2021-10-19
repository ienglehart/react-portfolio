import React, { Component } from 'react';
import '../../App.css'
import icon from './img/chev-icon.png'
//import 'bootstrap/dist/css/bootstrap.css';
  
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class About extends Component{
render(){
return(
<div className="" style={{ display: 'block', width: 700, padding: 30, margin: 'auto' }}>


      <Accordion defaultActiveKey="0" flush>
        <Card>
          <Card.Header className="accordion-header">
            <Accordion.Toggle as={Button} 
              variant="link" eventKey="0" className="accordion-btn">
              About Me <img src={icon} alt="V" className="about-icon"/>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="accordion-body">
            Hi! I'm Ian and im looking for opportunities in coding.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>


      <Accordion>
        <Card>
          <Card.Header className="accordion-header">
            <Accordion.Toggle as={Button} 
              variant="link" eventKey="1" className="accordion-btn">
              Education <img src={icon} alt="V" className="about-icon"/>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="accordion-list">
                <ul>
                    <li>Deltona High School, Graduated with Superindentents Diploma of Distinction Honors</li>
                    <li>Seminole State, Graudated with an Associates Degree recieving Deans List Honors multiple times</li>
                    <li>UCF Coding Bootcamp</li>
                </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>


      <Accordion>
        <Card>
          <Card.Header className="accordion-header">
            <Accordion.Toggle as={Button} 
              variant="link" eventKey="2" className="accordion-btn">
              Work History <img src={icon} alt="V" className="about-icon"/>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="accordion-body">
            I was a Delivery Driver until the beginning of the pandemic, at which point I opted to self-isolate and focus more on my upcoming coding camp. 
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
)
}    
};
