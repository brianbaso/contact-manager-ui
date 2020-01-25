import React from "react";
import Logout from "../components/auth/Logout";
import SearchBar from "../components/general/SearchBar";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: [],
      accounts: []
    };
  }

  render() {
    return (
      <div style={styles.backdrop}>
        <div className="header">
          <Logout />
        </div>

        <div>
          <br />
          <SearchBar />
        </div>
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

export default HomePage;
