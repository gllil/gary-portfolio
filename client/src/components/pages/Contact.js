import React from "react";

function Contact() {
    return(
        <div>
            <div class="container">
      <div class="row contact-form" >
        <form class="col s12 " id="contact-form" method="POST" action="send">
          <div class="row text-black">
            <div class="input-field col s12">
              <input placeholder="Ex: John Doe" type="text" name="name" class="validate nameInfo" required/>
              <label for="name">Name</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input type="email" name="email" class="validate emailInfo" required/>
              <label for="email">Email Address</label>
            </div>
          </div>


          <div class="row">
            <div class="input-field col s12">
              <textarea class="materialize-textarea messageInfo" name="message" required></textarea>
              <label for="message">Message</label>
            </div>
          </div>

          <button class="btn waves-effect waves-light grey darken-1 right emailBtn" type="submit">Submit
            <i class="material-icons right">send</i>
          </button>


        </form>
      </div>
    </div>
    <div id="errorMessage" class="modal">
      <div class="modal-content">
                <p>Form must be filled before sending</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat errorCloseBtn">Close</a>
      </div>
    </div>
    <div id="successMessage" class="modal">
      <div class="modal-content">
                <p>Message Sent Successfully</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat closeBtn">Close</a>
      </div>
    </div>
        </div>
    )
}

export default Contact;