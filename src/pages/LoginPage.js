import React, { useState, useContext, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../components/auth/Auth";
import { LoginForm, RegisterForm } from "../components/auth/LoginRegister";

const LoginPage = props => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="box" style={styles.backdrop}>
      <div className="center" style={styles.mainWindow}>
        <div className="left" style={styles.left}>
          <div>Contact Manager</div>
          <div className="content" style={styles.leftContent}>
            {showLogin && !showRegister && (
              <LoginForm showRegister={handleShowRegister} />
            )}
            {showRegister && !showLogin && (
              <RegisterForm showLogin={handleShowLogin} />
            )}
          </div>
        </div>
        <div className="right" style={styles.right}></div>
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
  mainWindow: {
    position: "relative",
    width: "65%",
    border: "4px solid white",
    padding: "70px 0",
    margin: "0 auto",
    top: "23%",
    height: "60%",
    minHeight: "60%"
  },
  left: {
    position: "relative",
    border: "5px solid grey",
    width: "40%",
    float: "left",
    height: "100%",
    bottom: "27%",
    right: ".4%"
  },
  leftContent: {
    border: "5px solid pink",
    margin: "auto",
    position: "relative",
    top: "50%",
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)",
    width: "80%"
  },
  right: {
    position: "relative",
    border: "5px solid green",
    width: "61%",
    height: "154%",
    bottom: "27%",
    left: "39.5%"
  }
};

export default withRouter(LoginPage);
