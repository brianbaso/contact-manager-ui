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

export default CCHeader;
