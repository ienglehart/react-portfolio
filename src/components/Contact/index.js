import React, { Component } from 'react';
import '../../App.css';
import emailjs from 'emailjs-com';

export default class Contact extends Component {
  render(){
  //send email from form below via emailjs
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_fw4xu9w', 'template_t2dryya', e.target, 'user_urBSH40An3KgHVj0MTryY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    //confirm send and reset form.
    alert("sent :)");
    e.target.reset();

  }
  return(
  //simple input form, sent using emailjs >add a modal confirmation, displays example of email?<
  <form className="form-style" onSubmit={sendEmail}>      
    <input name="user_name" type="text" className="feedback-input" placeholder="Name"/>   
    <input name="user_email" type="text" className="feedback-input" placeholder="Email"/>
    <textarea name="message" className="feedback-input contact-text" placeholder="Comment"></textarea>
    <input type="submit" value="SUBMIT" className="submit-btn"/>
  </form>
  )
}
}
