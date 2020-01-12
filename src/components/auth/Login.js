import React from 'react';
import { Button } from 'react-bootstrap';

export const Login = () => {
  return (
    <div>
      <form className='userin' action='/'>
        <div id='username' style={styles.username}>
          Email: <input type='text' />
        </div>
        <div id='password' style={styles.password}>
          Password: <input type='text' />
        </div>

        <Button id='btn_login' variant='primary' size='sm' style={styles.login}>
          Login
        </Button>

        <Button id='btn_forgot-password' variant='primary' size='sm' style={styles.forgotPassword}>
          Forgot Password
        </Button>

        <Button id='btn_goto-register' variant='primary' size='sm' style={styles.register}>
          Register
        </Button>
      </form>
    </div>
  );
};

const styles = {
  username: {
    position: 'fixed',
    margin: 'auto',
    top: '30%',
    left: '35%',
    width: '30%'
  },
  password: {
    position: 'fixed',
    margin: 'auto',
    top: '45%',
    left: '34.01%'
  },
  login: {
    position: 'fixed',
    left: '43%',
    top: '60%'
  },
  forgotPassword: {
    position: 'fixed',
    left: '50%',
    top: '60%'
  },
  register: {
    position: 'fixed',
    left: '43%',
    top: '75%'
  }
};
