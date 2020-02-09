import React from "react";
import Header from "./Header.js";
import ContactCard from "./contactCard.js";
import "./HomepageStyle.scss";
import axios from "axios";

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
      <div>
        <Header />
        {this.state.contacts.map((contact, idx) => {
          console.log(contact);
          return (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.data.name}
              address={contact.data.address}
              phoneNumber={contact.data.phoneNumber}
            />
          );
        })}
      </div>
    );
  }

}

export default Homepage;
