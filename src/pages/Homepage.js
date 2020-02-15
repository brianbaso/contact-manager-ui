import React from "react";
import Header from "../components/general/Header.js";
import ContactCard from "../components/general/ContactCard";
import axios from "axios";
import SearchBar from "../components/general/SearchBar";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  render() {
    return (
      // NEED TO INSERT: search bar after the header
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
    padding: "0px",
    backgroundColor: "#33B8F8"
  },
  ContactCard: {
    position: "relative",
    paddingTop: "100000px"
  }
};

export default Homepage;
