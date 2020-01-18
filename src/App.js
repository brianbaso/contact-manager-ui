import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./components/auth/Auth";

// Change '/' and '/profile' to privateroutes after auth is allowed
// Only '/authentication' should be public

const App = () => (
  <AuthProvider>
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/authentication" component={LoginPage} />
      <Route exact path="/profile" component={ProfilePage} />
    </Router>
  </AuthProvider>
);

export default App;
