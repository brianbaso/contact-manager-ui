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

  // invoked immediately after a component is mounted, good place for network requests
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
  }

  render() {
    return (
      // NEED TO INSERT: search bar after the header
      // pass the information to contactCard
      <div style={styles.body}>
        <Header />
        <SearchBar></SearchBar>
        {/* {this.state.contacts.map((contact, idx) => {
            return (
              <ContactCard
                key={contact.id}
                name={contact.data.name}
                address={contact.data.address}
                phoneNumber={contact.data.phoneNumber}
                style={styles.ContactCard}
              />
            );
          })} */}
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
