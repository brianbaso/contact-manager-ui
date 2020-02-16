import Logout from "../auth/Logout";
import React from "react";

class CCHeader extends React.Component {
  render() {
    return (
      <div style={styles.div}>
        <Logout></Logout>
        <t1 style={styles.t1}>Contactly</t1>
      </div>
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

export default CCHeader;
