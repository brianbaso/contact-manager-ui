import React from "react";
import Logout from "../auth/Logout";
class Header extends React.Component {
  render() {
    return (
      <div style={styles.div}>
        <Logout></Logout>
        <t1 style={styles.t1}>Contact Manager</t1>
      </div>

      // put the create contact button somewhere in here.
      // edit the headerstyle css with left padding to get over to the right
    );
  }
}

const styles = {
  div: {
    position: "relative",
    background: "#38BDFD",
    width: "100%",
    height: "50px",
    paddingTop: "1px",
    boxShadow: ".3px .3px #808080"
  },
  t1: {
    position: "relative",
    left: "13.7%",
    paddingLeft: "15px",
    textAlign: "left",
    color: "#ffffff",
    fontSize: "200%"
  }
};

export default Header;
