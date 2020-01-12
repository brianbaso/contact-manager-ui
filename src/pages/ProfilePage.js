import React from "react";
import Logout from "../components/auth/Logout";
import { withRouter } from "react-router";

const ProfilePage = props => {
  return (
    <div id="outer-container" style={styles.backdrop}>
      <h1>Profile Page Insert Content here</h1>
      <Logout />
    </div>
  );
};

const styles = {
  backdrop: {
    position: "fixed",
    backgroundColor: "#222",
    color: " #e6e6e6",
    borderColor: "#e6e6e6",
    width: "100%",
    height: "100%"
  },
  mainWindow: {
    position: "fixed",
    width: "100%"
  }
};

export default withRouter(ProfilePage);
