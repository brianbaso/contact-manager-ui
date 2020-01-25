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
          <div> Contact Manager</div>
          <div className="content" style={styles.leftContent}>
            {showLogin && !showRegister && (
              <LoginForm showRegister={handleShowRegister} />
            )}
            {showRegister && !showLogin && (
              <RegisterForm showLogin={handleShowLogin} />
            )}
          </div>
        </div>
        {/* <div className="right" style={styles.right}></div> */}
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
    width: "60%",
    border: "4px solid white",
    margin: "0 auto",
    top: "20%",
    height: "65%",
    display: "flex",
    flexDirection: "column"
  },
  left: {
    position: "relative",
    backgroundColor: "white",
    alignItems: "stretch",
    height: "100%",
    width: "50%",
    border: "5px solid yellow",
    float: "left",
    flexGrow: "1"
  },
  leftContent: {
    border: "5px solid pink",

    color: "black",
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
    float: "right",
    width: "61%",
    height: "154%",
    bottom: "27%",
    left: "39.5%"
  }
};

export default withRouter(LoginPage);
