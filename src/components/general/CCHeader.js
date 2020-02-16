import Logout from "../auth/Logout";
import React from "react";

class CCHeader extends React.Component {
  render() {
    return (
      <div>
        <Logout></Logout>
        <div id="t1">Contact Manager</div>
      </div>
    );
  }
}

export default CCHeader;
