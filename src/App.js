import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CreateContactPage from "./pages/CreateContactPage.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/CreateContactPage" component={CreateContactPage} />
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contact Manager UI
        </p>
      </header>
    </div>
  );
}

export default App;