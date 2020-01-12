import React from "react";
import fire from "../../config/Fire";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  // Pretty self explanatory
  logout() {
    fire.auth().signOut();
  }

  render() {
    return <button onClick={this.logout}>Logout</button>;
  }
}

const styles = {};

export default Logout;
