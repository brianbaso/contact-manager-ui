import React from 'react';
import Header from "./Header.js";
import ContactCard from "./contactCard.js";
import "./HomepageStyle.scss";
// need to resolve the file for axios or something
import axios from 'axios';

//import UsersContactCard from "./UsersContactCard.js";
//import { render } from "react-dom";
//import ContactList from "./ContactList.js";

class Homepage extends React.Component {
    // constructor with info saved in this.state ={}
    // component did mount once page loads run
    //contacts.forEach

    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        // temporary contacts array
        let contacts = [];
        // this is the url for get from postman... it works in post so it should work here? or no?
        axios.get('https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts')
            .then((contacts) => {
                this.setState({ contacts: contacts.data });
            })
            .catch((e) => {
                console.log('Error getting contacts', e);
            });
    }

    render()
    {
        // javascript
        // temporary contacts
        const contacts = [];

        this.state.contacts.forEach((contact) => {
            // optional console log to see data the JSON package
            console.log('contact', contact);
            contacts.push(
              // TODO: ContactCard will accept props
                <ContactCard
                    key={contact.id}
                    id={contact.id}
                    name={contact.data.name}
                    phone={contact.data.phoneNumber}
                    address={contact.data.address}
                />
            );
        });
        console.log(contacts);

        return (
            // search bar after the header
            // removed... <h1> Contacts </h1>
            // removed... <ContactCard />
            <div>
                <Header />
                {contacts}

            </div>
                // I have to add the list in here somewhere..

            );
    }
}

export default Homepage;
