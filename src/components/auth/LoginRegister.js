import React, { useState } from "react";
import fire from "../../config/Fire";
import { SignupBtn } from "../general/CustomButton";
import { InputForm } from "../general/InputForm";

const OptionsForm = ({ showLogin, showRegister }) => {
  return (
    <div>
      <SignupBtn name={"Login"} onClick={showLogin} />
      <SignupBtn name={"Register"} onClick={showRegister} />
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
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        alert(error);
      });
  };

  return (
    <div>
      <form>
        <InputForm
          labelhead={"Email address"}
          value={email}
          onChange={changeEmail}
          type={"email"}
          placeholder={"Enter email"}
        />
        <InputForm
          labelhead={"Password"}
          value={password}
          onChange={changePassword}
          type={"password"}
          placeholder={"Password"}
        />
        <SignupBtn name="Login" onClick={handleLogin} />
        <SignupBtn name={"Go Register"} onClick={showRegister} />
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
    fire
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
          labelhead={"Email address"}
          value={email}
          onChange={changeEmail}
          type={"email"}
          placeholder={"Enter email"}
        />
        <InputForm
          labelhead={"Password"}
          value={password}
          onChange={changePassword}
          type={"password"}
          placeholder={"Password"}
        />
        <SignupBtn name="Register" onClick={handleSignup} />
        <SignupBtn name={"Go Login"} onClick={showLogin} />
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
  }
};

export { LogForm, RegForm, OptionsForm };
