import React from 'react';

// import { validateEmail } from '../../utils/helpers';

function Contact() {
  //css styles that i should probably move to a dedicated css stylesheet
  const formStyle = { 
    maxWidth: "420px",
    margin: "50px auto" 
  };
  const feedbackInput ={
    color:"black",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: "500",
    fontSize: "18px",
    borderRadius: "5px",
    lineHeight: "22px",
    backgroundColor: "transparent",
    border: "2px solid #CC6666",
    transition: "all 0.3s",
    padding: "13px",
    marginBottom: "15px",
    width: "100%",
    boxSizing: "border-box",
    outline: "0"
  }
  const txtArea = {
    height: "150px",
    lineHeight: "150%",
    resize: "vertical"
  }
  const submitBtn ={
    width: "100%",
    background: "#cc6666",
    borderRadius: "5px",
    boder: "0",
    cursor: "pointer",
    color:"white",
    fontSize:"24px",
    paddingTop:"10px",
    paddingBottom:"10px",
    transition: "all 0.3s",
    marginTop: "-4px",
    fontWeight: "700",
  }
  return(
    //simple input form, need to set up php email backend, or a service such as emailjs to send mail.
  <form style={formStyle}>      
    <input name="name" type="text" class="feedback-input" placeholder="Name" style={feedbackInput}/>   
    <input name="email" type="text" class="feedback-input" placeholder="Email" style={feedbackInput}/>
    <textarea name="text" class="feedback-input" placeholder="Comment"style={feedbackInput}></textarea>
    <input type="submit" value="SUBMIT" style={submitBtn}/>
  </form>
  )
}

export default Contact;