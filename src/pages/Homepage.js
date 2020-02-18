import SearchBar from "../components/general/SearchBar";
import Header from "../components/general/Header.js";
import * as firebase from "firebase/app";
import axios from "axios";
import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // pass the information to contactCard
      <div style={styles.body}>
        <Header />
        <SearchBar></SearchBar>
      </div>
    );
  }
}

const styles = {
  // This is the background color for the big portion of the page
  body: {
    //padding: "0px",
    overflowX: "hidden",
    backgroundColor: "#33B8F8",
    height: "100vh",
    width: "100%"
  },
  ContactCard: {
    position: "relative"
  }
};

export default Homepage;
