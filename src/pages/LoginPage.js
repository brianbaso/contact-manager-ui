import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../components/auth/Auth";
import {
  OptionsForm,
  LogForm,
  RegForm
} from "../components/auth/LoginRegister";

const LoginPage = props => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  // All this does is checks if a user is already signed in
  // If they are signed in already, redirect them somewhere else
  // We're not using a privateroute here and have to do this manually
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="box">
      <div className="left">
        {!showLogin && !showRegister && (
          <OptionsForm
            showRegister={handleShowRegister}
            showLogin={handleShowLogin}
          />
        )}
        {showLogin && !showRegister && (
          <LogForm showRegister={handleShowRegister} />
        )}
        {showRegister && !showLogin && <RegForm showLogin={handleShowLogin} />}
      </div>
    </div>
  );
};

// const styles = {
//   backdrop: {
//     position: "fixed",
//     backgroundColor: "#222",
//     color: " #e6e6e6",
//     borderColor: "#e6e6e6",
//     width: "100%",
//     height: "100%"
//   },
//   box: {
//     border: "3px solid white",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     width: "65%",
//     height: "80%",
//     transform: "translate(-50%, -50%)"
//   }
// };

export default withRouter(LoginPage);
