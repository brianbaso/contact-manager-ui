import React from 'react';
import { SideBar } from '../components/general/SideBar.js';
import { SelectedUserViewer } from '../components/suv/SelectedUserViewer.js';
// import { NavBar } from './NavBar.js';

const MainPage = props => {
  return <div id='outer-container' style={styles.backdrop}></div>;
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
  mainWindow: {
    position: 'fixed',
    width: '100%'
  }
};

export { MainPage };
