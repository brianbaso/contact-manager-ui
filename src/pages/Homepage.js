import React from "react";
import Header from "../components/general/Header.js";
import * as firebase from "firebase/app";
import "firebase/auth"
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

    
  // invoked immediately after a component is mounted, good place for network requests
<<<<<<< HEAD
    componentDidMount() {
        let currentComponent = this;
        // check if user is signed in
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in, use their uid for getting their contacts
                var uid = user.uid;
                console.log(uid);
                var hyper = "https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/" + uid + "/contacts";
                console.log(hyper);
                //debugger;
                axios
                    .get(
                        hyper
                    )
                    .then(res => {
                        console.log(res.data);
                        currentComponent.setState({ contacts: res.data });
                        console.log(currentComponent.state.contacts);
                    })
                    .catch(e => {
                        console.log("Error getting contacts", e);
                    });
            } else {
                
            }
        });    
=======
  componentDidMount() {
    // cors-anywhere to fix the cors error
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts"
      )
      .then(res => {
        this.setState({ contacts: res.data });
        console.log(this.state.contacts);
      })
      .catch(e => {
        console.log("Error getting contacts", e);
      });
>>>>>>> 22487aef4b38e50f66524355191b8fef526ba4d8
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
    backgroundColor: "#33B8F8",
    height: "100vh",
    maxWidth: "100%",
    overflowX:"hidden"
  },
  ContactCard: {
    position: "relative"
    //paddingTop: "100000px"
  }
};

export default Homepage;
