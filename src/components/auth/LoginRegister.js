import React, { useState } from "react";
import { InputForm } from "../general/InputForm";
import * as firebase from "firebase/app";

const OptionsForm = ({ showLogin, showRegister }) => {
  return (
    <div>
      <button onClick={showLogin}>Login</button>
      <button onClick={showRegister}>Register</button>
    </div>
  );
};

const LogForm = ({ showRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Changes what's in our email state variable with what's in the email inputbox
  const changeEmail = e => setEmail(e.target.value);

  // Changes what's in our password state variable with what's in the inputbox
  const changePassword = e => setPassword(e.target.value);

  // Occcurs when login button is called
  const handleLogin = e => {
    // Just says to stop allowing the button to function as it does for now
    e.preventDefault();

    // Here we're checking the user's information and attempting to login
    // The catch is for any error (such as invalid info being given)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
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
        <button onClick={handleLogin}>Login</button>
        <button onClick={showRegister}>Register an account</button>
      </form>
    </div>
  );
};

const RegForm = ({ showLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Changes what's in our email state variable with what's in the email inputbox
  const changeEmail = e => setEmail(e.target.value);

  // Changes what's in our password state variable with what's in the inputbox
  const changePassword = e => setPassword(e.target.value);

  // Occurs when signup button is called
  const handleSignup = e => {
    e.preventDefault();

    // Here we are doing the same thing as handlelogin, just with creating an account
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
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
        <button onClick={handleSignup}>Register</button>
        <button onClick={showLogin}>Already have an account?</button>
      </form>
    </div>
  );
};

// const styles = {
//   wrapper: {
//     position: "absolute",
//     top: "50%",
//     msTransform: "translate(-50%)",
//     transform: "translateY(-50%)",
//     left: "25%"
//   }
// };

export { LogForm, RegForm, OptionsForm };
