import React from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./components/auth/Auth";

// Change '/' and '/profile' to privateroutes after auth is allowed
// Only '/authentication' should be public

const App = () => (
  <AuthProvider>
    <Router>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      {/* <Route exact path="/profile" component={ProfilePage} /> */}
    </Router>
  </AuthProvider>
);

export default App;
