import CreateContactPage from "./pages/CreateContactPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./components/auth/Auth";
import RegisterPage from "./pages/RegisterPage";
import React from "react";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";

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
