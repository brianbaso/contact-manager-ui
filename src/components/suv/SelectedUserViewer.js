import React from 'react';
import { ProfilePicture } from '../general/ProfilePicture.js';

// https://github.com/negomi/react-burger-menu

const SelectedUserViewer = props => {
  return <div className='wrapper' style={styles.window}></div>;
};

const styles = {
  window: {
    position: 'fixed',
    height: '48%',
    width: '100%',
    backgroundColor: '#222',
    color: ' #e6e6e6',
    border: '5px solid white'
  }
};

export { SelectedUserViewer };
