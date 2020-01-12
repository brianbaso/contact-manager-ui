import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth";
import fire from "../../config/Fire";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This version for handling login doesn't work, don't know why
  // const handleLogin = useCallback(
  //   async event => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       await app
  //         .auth()
  //         .signInWithEmailAndPassword(email.value, password.value);
  //       history.push("/");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   [history]
  // );

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

  // Changes what's in our email state variable with what's in the email inputbox
  const changeEmail = e => setEmail(e.target.value);

  // Changes what's in our password state variable with what's in the inputbox
  const changePassword = e => setPassword(e.target.value);

  // All this does is checks if a user is already signed in
  // If they are signed in already, redirect them somewhere else
  // We're not using a privateroute here and have to do this manually
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="col-md-6" style={styles.wrapper}>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={email}
            onChange={changeEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={password}
            onChange={changePassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={handleLogin} className="btn btn-primary">
          Login
        </button>
        <button
          onClick={handleSignup}
          style={{ marginLeft: "25px" }}
          className="btn btn-success"
        >
          Signup
        </button>
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

export default withRouter(Login);
