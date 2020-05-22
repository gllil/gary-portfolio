import React, { useState } from "react";
import "materialize-css";
import { TextInput, Textarea } from "react-materialize";
import axios from "axios"

// const nodemailer = require("nodemailer");

function Contact() {
  const [formObject, setFormOject] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  function handleInputChange(event) {
    setFormOject({
      ...formObject,
      [event.target.name]: event.target.value,
    });
  }

  function handleEmailButton(event) {
    event.preventDefault();

    axios.post("/api/sendMail", formObject)
  }

  return (
    <div>
      <div className="container">
        <div className="row contact-form">
          <form className="col s12 " id="contact-form">
            <div className="row text-black">
              <TextInput
                id="name"
                name="name"
                label="Full Name"
                placeholder="Ex: John Doe"
                s={12}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row text-black">
              <TextInput
                email
                error="Please Input an Email"
                name="email"
                id="email"
                label="Email"
                success="Great"
                placeholder="email@example.com"
                validate
                s={12}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row text-black">
              <Textarea
                data-length={500}
                name="message"
                id="message"
                label="Message"
                s={12}
                validate
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              className="btn waves-effect waves-light grey darken-1 right emailBtn"
              type="submit"
              onClick={handleEmailButton}
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
      <div id="errorMessage" className="modal">
        <div className="modal-content">
          <p>Form must be filled before sending</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat errorCloseBtn"
          >
            Close
          </a>
        </div>
      </div>
      <div id="successMessage" className="modal">
        <div className="modal-content">
          <p>Message Sent Successfully</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat closeBtn"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
