import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./components/auth/Auth";

const App = () => (
  <AuthProvider>
    <Router>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route exact path="/authentication" component={LoginPage} />
      <PrivateRoute exact path="/profile" component={ProfilePage} />
    </Router>
  </AuthProvider>
);

export default App;
