
import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./components/auth/Auth";
import Logout from "./components/auth/Logout";
import { AuthContext } from "./components/auth/Auth";
import Homepage from './Homepage.js';
import "./HomepageStyle.scss";

const HomePageTest = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
        <div>
        <Homepage />
        </div>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <PrivateRoute exact path="/" component={HomePageTest} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
    </Router>
  </AuthProvider>
);

export default App;
