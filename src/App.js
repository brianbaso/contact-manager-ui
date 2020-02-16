import CreateContactPage from "./pages/CreateContactPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./components/auth/Auth";
import { AuthContext } from "./components/auth/Auth";
import RegisterPage from "./pages/RegisterPage";
import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import { Redirect } from "react-router";
import Homepage from "./pages/Homepage";

const HomePageTest = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login"/>;
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
      <PrivateRoute exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/createContact" component={CreateContactPage} />
    </Router>
  </AuthProvider>
);

export default App;
