import React from 'react';
import { Button } from 'react-bootstrap';

export const CustomButton = ({ name, onClick, style }) => {
  return (
    <Button onClick={onClick} style={style}>
      {name}
    </Button>
  );
};

export const AuthButton = ({ name, onClick }) => {
  return (
    <Button onClick={onClick} style={styles.auth} variane='primary' size='sm'>
      {name}
    </Button>
  );
};

const styles = {
  auth: {
    color: 'black',
    width: '60%',
    height: '90%'
  }
};
