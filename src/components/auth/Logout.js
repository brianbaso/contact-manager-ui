import React from "react";
import * as firebase from "firebase/app";

const Logout = () => {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <button onClick={logout} style={styles}>
      Logout
    </button>
  );
};

const styles = {};

export default Logout;
