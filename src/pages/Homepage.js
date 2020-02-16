import SearchBar from "../components/general/SearchBar";
import Header from "../components/general/Header.js";
import * as firebase from "firebase/app";
import axios from "axios";
import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
      };

    }

  // invoked immediately after a component is mounted, good place for network requests
  componentDidMount() {
    let currentComponent = this;
    // check if user is signed in
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in, use their uid for getting their contacts
            var uid = user.uid;
            var hyper = "https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/" + uid + "/contacts";

            axios
                .get(
                    hyper
                )
                .then(res => {
                    currentComponent.setState({ contacts: res.data });
                })
                .catch(e => {
                    console.log("Error getting contacts", e);
                });
        } else {
        }
    });
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
    position: "relative",
  }
};

export default Homepage;
