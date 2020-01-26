import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../components/auth/Auth";
import AuthForm from "../components/auth/AuthForm";
import * as firebase from "firebase/app";

const RegisterPage = props => {
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

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="box" style={styles.backdrop}>
      <div className="center" style={styles.mainWindow}>
        <div className="left" style={styles.left}>
          <AuthForm
            changeEmail={changeEmail}
            changePassword={changePassword}
            btnText={"Create account"}
            btnOnclick={handleSignup}
            smallText={"Have an account? Sign in"}
            smallOnclick={"/login"}
          />
        </div>
        {/* <div className="right" style={styles.right}></div> */}
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    // Positioning
    position: "fixed",

    // Display
    width: "100%",
    height: "100%",

    // Color
    background:
      "linear-gradient(227deg, rgba(3,164,166,1) 38%, rgba(178,31,228,1) 76%, rgba(137,43,235,1) 100%)"
  },
  mainWindow: {
    // Positioning
    position: "relative",
    margin: "0 auto",
    top: "13%",

    // Display
    width: "70%",
    height: "80%",
    border: "4px solid white",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px"
  },
  left: {
    // Positioning
    position: "relative",
    alignItems: "stretch",
    float: "left",
    flexGrow: "1",

    // Display
    height: "100%",
    width: "45%",

    // Color
    backgroundColor: "white"
  },
  right: {
    // Positioning
    position: "relative",
    float: "right",
    bottom: "27%",
    left: "39.5%",

    // Display
    width: "61%",
    height: "154%",

    // Color
    border: "5px solid green"
  }
};

export default withRouter(RegisterPage);
