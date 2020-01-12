import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomButton } from './components/general/CustomButton.js';
import { MainPage } from './pages/MainPage.js';
import { ProfilePictureSmall, ProfilePictureLarge } from './components/general/ProfilePicture';
import { InitialPage } from './pages/InitialPage';
import fire from './config/fire';
import { Home } from './Home.js';
import { Login } from './Login.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

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
      <div className='App'>
        <div>{this.state.user ? <Home /> : <Login />}</div>
      </div>
    );
  }
}

export default App;
