import React, { useState } from "react";
import { InputForm } from "../general/InputForm";
import * as firebase from "firebase/app";

const errormsg = ({ msg }) => {
  return <div>{msg}</div>;
};

const LoginForm = ({ showRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = e => setEmail(e.target.value);
  const changePassword = e => setPassword(e.target.value);

  const handleLogin = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        document.getElementById("error").innerHTML = error;
      });
  };

  return (
    <div>
      <form>
        <div id="error"></div>
        <InputForm
          labelhead={"Email"}
          value={email}
          onChange={changeEmail}
          type={"email"}
          placeholder={"Enter your email address"}
        />
        <InputForm
          labelhead={"Password"}
          value={password}
          onChange={changePassword}
          type={"password"}
          placeholder={"Enter your password"}
          pattern={"(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}"}
        />
        <button onClick={handleLogin}>Sign in your account</button>
        <button onClick={showRegister}>New user? Sign up</button>
      </form>
    </div>
  );
};

const RegisterForm = ({ showLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = e => setEmail(e.target.value);
  const changePassword = e => setPassword(e.target.value);

  const handleSignup = e => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        document.getElementById("error").innerHTML = error;
      });
  };

  return (
    <div>
      <form>
        <div id="error"></div>
        <InputForm
          labelhead={"Email"}
          value={email}
          onChange={changeEmail}
          type={"email"}
          placeholder={"Enter your email address"}
        />
        <InputForm
          labelhead={"Password"}
          value={password}
          onChange={changePassword}
          type={"password"}
          placeholder={"Enter your password"}
        />
        <button onClick={handleSignup}>Create account</button>
        <button onClick={showLogin}>Have an account? Sign in</button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "absolute",
    top: "50%",
    msTransform: "translate(-50%)",
    transform: "translateY(-50%)",
    left: "25%"
  },
  left: {
    position: "relative",
    border: "5px solid grey",
    width: "50%",
    float: "left",
    height: "152%",
    bottom: "26%"
  },
  buttons: {
    border: "5px solid blue",
    top: ""
  }
};

export { LoginForm, RegisterForm };
