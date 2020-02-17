import Logout from "../auth/Logout";
import React from "react";

class CCHeader extends React.Component {
  render() {
    return (
      <div>
        <Logout></Logout>
        <t1 style={styles.t1}>Contactly</t1>
      </div>
    );
  }
}

const styles = {
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
