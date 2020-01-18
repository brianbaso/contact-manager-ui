import React, { useState, useContext, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../components/auth/Auth";
import {
  OptionsForm,
  LoginForm,
  RegisterForm
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
          <LoginForm showRegister={handleShowRegister} />
        )}
        {showRegister && !showLogin && (
          <RegisterForm showLogin={handleShowLogin} />
        )}
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
