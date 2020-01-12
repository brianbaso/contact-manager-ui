import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import fire from "./config/Fire";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  // Directly after the component mounts, but before rendering,
  // Check if a user is logged in
  componentDidMount() {
    this.authListener();
  }

  // All this does is changes state based on if a user is signed in or not
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <HomePage /> : <LoginPage />}
      </div>
    );
  }
}

export default App;
