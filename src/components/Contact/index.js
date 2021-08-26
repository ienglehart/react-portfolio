import React from 'react';

// import { validateEmail } from '../../utils/helpers';

function Contact() {
  return(
    <div className="card mx-auto holder-card">
    <div className="text-center p-3">

    <form action="mailto:ienglehart13@gmail.com" method="GET" target="_blank">
      <h1 class="title">Email Me</h1>
      <div class="field">
        <label class="label" for="subject">Email Subject</label>
        <input name="subject" id="subject" type="text" class="input email-subject" placeholder="Subject"/>
      </div>
      <div class="field">
        <label class="label" for="body">Email Body</label>
        <textarea class="textarea" name="body" id="body" placeholder="Type your message here!"></textarea> 
        {/* <input name="body" id="body" type="text" class="input email-body" placeholder="Write your message here!"/> */}
      </div>
      <div>
        <input type="submit" value="Create Email" class="button is-primary"/>
      </div>
    </form>

    </div>
    </div> 
  )
}

export default Contact;