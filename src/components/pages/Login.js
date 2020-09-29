import React, { useState, useContext } from "react";
import { Button, Container, TextInput } from "react-materialize";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import { auth } from "../../firebase/config";

const Login = ({ history }) => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const loginForm = document.querySelector(".loginForm");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = form.email;
    let password = form.password;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        loginForm.reset();
        history.push("/admin");
      })
      .catch((error) => alert(error));
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }
  return (
    <Container>
      <form
        className="contact-form loginForm"
        onChange={handleChange}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h4 className="center">Login</h4>
        <TextInput label="Email" type="email" name="email" />
        <TextInput
          label="Password"
          type="password"
          name="password"
          id="password"
        />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default withRouter(Login);
