import React from "react";
import Logout from "../components/auth/Logout";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="outer-container" style={styles.backdrop}>
        <h1>Profile Page Insert Content here</h1>
        <Logout />
      </div>
    );
  }
}

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
