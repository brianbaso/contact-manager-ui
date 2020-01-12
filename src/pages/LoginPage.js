import React from "react";
import Login from "../components/auth/Login";

const LoginPage = props => {
  return (
    <div id="wrapper" style={styles.backdrop}>
      <div className="box" style={styles.boxOuter}>
        <div className="content" style={styles.boxInner}>
          <Login />
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: "fixed",
    backgroundColor: "#222",
    color: " #e6e6e6",
    borderColor: "#e6e6e6",
    width: "100%",
    height: "100%"
  },
  boxOuter: {
    border: "3px solid white",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "65%",
    height: "80%",
    transform: "translate(-50%, -50%)"
  },
  boxInner: {
    border: "3px solid white",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "90%",
    height: "80%",
    transform: "translate(-50%, -50%)"
  }
};

export default LoginPage;
