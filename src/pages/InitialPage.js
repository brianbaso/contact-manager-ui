import React, { useState, useEffect } from 'react';
import { SideBar } from '../components/general/SideBar.js';
import { SelectedUserViewer } from '../components/suv/SelectedUserViewer.js';
// import { NavBar } from './NavBar.js';
import { Button } from 'react-bootstrap';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

const MainAuthScreen = ({ onClick }) => {
  return (
    <div styles={{ border: '5px solid blue' }}>
      <h1 id='welcome-text'>Main Page</h1> (insert whatever here)
      <Button id='btn-login' onClick={() => onClick('login')} variant='primary' style={styles.login}>
        Login
      </Button>
      <Button
        id='btn-register'
        onClick={() => onClick('register')}
        variant='primary'
        style={styles.register}
      >
        Register
      </Button>
    </div>
  );
};

const InitialPage = props => {
  const [showMain, setShowMain] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const onClick = url => {
    setShowMain(false);
    if (url === 'login') {
      setShowRegister(false);
      setShowLogin(true);
    } else if (url === 'register') {
      setShowLogin(false);
      setShowRegister(true);
    }
  };

  return (
    <div id='wrapper' style={styles.backdrop}>
      <div className='box' style={styles.boxOuter}>
        <div className='content' style={styles.boxInner}>
          {showMain && <MainAuthScreen onClick={onClick} />}
          {showLogin && <Login onClick={onClick} />}
          {showRegister && <Register onClick={onClick} />}
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: 'fixed',
    backgroundColor: '#222',
    color: ' #e6e6e6',
    borderColor: '#e6e6e6',
    width: '100%',
    height: '100%'
  },
  boxOuter: {
    border: '3px solid white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '65%',
    height: '80%',
    transform: 'translate(-50%, -50%)'
  },
  boxInner: {
    border: '3px solid white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '90%',
    height: '80%',
    transform: 'translate(-50%, -50%)'
  },
  login: {
    position: 'fixed',
    left: '40%',
    top: '70%',
    width: '8%'
  },
  register: {
    position: 'fixed',
    right: '40%',
    top: '70%'
  }
};

export { InitialPage };
