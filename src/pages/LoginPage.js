import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../components/auth/Auth";
import AuthForm from "../components/auth/AuthForm";
import Women from "../icons/woman_of_color.jpg";
import * as firebase from "firebase/app";
import Header from "../Header.js";

const LoginPage = () => {
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
            btnText={"Sign in your account"}
            btnOnclick={handleLogin}
            smallText={"New user? Sign up"}
            smallOnclick={"/register"}
          />
        </div>
        <img src={Women} style={styles.img} />
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
      "linear-gradient(227deg, rgba(3,164,166,1) 31%, rgba(178,31,228,1) 59%, rgba(137,43,235,1) 100%)"
  },
  mainWindow: {
    // Positioning
    position: "relative",
    margin: "0 auto",
    top: "13%",

    // Display
    width: "70%",
    height: "80%",
    // border: "4px solid white",
    // display: "flex",
    flexDirection: "column"
  },
  left: {
    // Positioning
    position: "relative",
    float: "left",

    // Display
    height: "100%",
    width: "40%",

    // Color
    backgroundColor: "white",
    borderRadius: "15px 0px 0px 15px "
  },
  img: {
    // Positioning
    position: "relative",
    float: "right",
    // Display
    width: "60%",
    height: "100%",
    borderRadius: "0px 15px 15px 0px"
  }
};

export default withRouter(LoginPage);
