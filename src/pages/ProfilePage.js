import React from "react";
import Logout from "../components/auth/Logout";
import { withRouter } from "react-router";

// Necessities:
// Name
// Contact info used (phone, email, etc etc)

// Stretch:
// Profile Picture

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div id="outer-container" style={styles.backdrop}>
        <h1>Profile Page Insert Content here</h1>
        <Logout />
      </div>
    );
  }
}

// <div styles={style.namehere}> </div>
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
