import React, { useState } from "react";
import { functions } from "../../firebase/config";
import "materialize-css";
import { TextInput, Textarea } from "react-materialize";
// import axios from "axios";

// const nodemailer = require("nodemailer");

function Contact() {
  const [formDisplay, setFormDisplay] = useState({
    attr: "block",
  });
  const [modalDisplay, setModalDisplay] = useState({
    attr: "none",
  });
  const [validated, setValidated] = useState(false);
  const [formObject, setFormOject] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const emailRef = firestore().collection("messageDetails");

  function handleInputChange(event) {
    setFormOject({
      ...formObject,
      [event.target.name]: event.target.value,
    });

    console.log(formObject);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const contactEmail = functions.httpsCallable("contactEmail");

    contactEmail(formObject).then((res) => {
      console.log(res);
      setValidated(true);
      setModalDisplay({ attr: "block" });
      setFormDisplay({ attr: "none" });
      window.location.reload(false);
    });

    // emailRef.add(formObject).then(() => {});
    // axios.post("/api/sendMail", formObject);
  }

  return (
    <div>
      <div className="container">
        <div className="row contact-form">
          <h4 className="proj-description-title center">Contact Me</h4>
          <form
            className="col s12 "
            id="contact-form"
            validated={validated}
            onSubmit={handleSubmit}
            style={{ display: formDisplay.attr }}
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

          <div style={{ display: modalDisplay.attr }} className="center">
            <h3>Message Sent Successfully</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
