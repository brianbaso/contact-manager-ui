import React from "react";
import * as firebase from "firebase/app"

const Logout = () => {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <button onClick={logout} style={styles.btn}>
      Logout
    </button>
  );
};

const styles = {
  btn: {
    // borderRadius: "30px",
    position: "relative",
    height: "80%",
    left: "94.5%",
    bottom: "7px",
    borderRadius: "20px",

    // Color
    border: "1px solid white",
    color: "white",
    background:
      "linear-gradient(227deg, rgba(3,164,166,1) 38%, rgba(178,31,228,1) 76%, rgba(137,43,235,1) 100%)"
  }
};

export default Logout;
