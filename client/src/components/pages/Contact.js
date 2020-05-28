import React, { useState } from "react";
import "materialize-css";
import { TextInput, Textarea, Button } from "react-materialize";
import axios from "axios";

// const nodemailer = require("nodemailer");

function Contact() {
  const [formDisplay, setFormDisplay] = useState({
    attr: "block"
  })
  const [modalDisplay, setModalDisplay] = useState({
    attr: "none"
  })
  const [validated, setValidated] = useState(false);
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

  function handleSubmit(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    axios.post("/api/sendMail", formObject);

    setValidated(true);
    setModalDisplay({attr:"block"});
    setFormDisplay({attr:"none"});
    console.log(formDisplay.attr);
    console.log(modalDisplay.attr)
  }

  return (
    <div>
      <div className="container">
        <div className="row contact-form">
          <form
            className="col s12 "
            id="contact-form"
            validated={validated}
            onSubmit={handleSubmit}
            style={{display:formDisplay.attr}}
          >
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
                name="email"
                id="email"
                label="Email"
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
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>

            <div style={{display:modalDisplay.attr}} className="center">
            <h3>Message Sent Successfully</h3>
            </div>

        </div>
      </div>
      
    </div>
  );
}

export default Contact;
