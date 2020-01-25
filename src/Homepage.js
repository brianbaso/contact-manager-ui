import React from 'react';
import Header from "./Header.js";
import ContactCard from "./contactCard.js";
import "./HomepageStyle.scss";
import axios from 'axios';

//import UsersContactCard from "./UsersContactCard.js";
//import { render } from "react-dom";
//import ContactList from "./ContactList.js";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        // temporary contacts array
        let contacts = [];
        // cors-anywhere to fix the cors error
        axios.get('https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts')
            .then((contacts) => {
                this.setState({ contacts: contacts.data });
            })
            .catch((e) => {
                console.log('Error getting contacts', e);
            });
    }

    render() {
        // javascript
        // this will have all the contacts in it
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
                    phoneNumber={contact.data.phoneNumber}
                    address={contact.data.address}
                />
            );

        });
        console.log(contacts);
        
        
        return (
            // search bar after the header
            <div>
                <Header />
                {contacts.map((contact, index) => { return <ContactCard name={contact.name} phoneNumber={contact.phoneNumber} address={contact.address} /> })}


            </div>
            
        );
    }

/* BEST ATTEMPT SO FAR WAS UNDER HEADER
           {contacts.map((contact, index) => {
               //console.log(contact)
               return <ContactCard {...contact}/>
           })}
           */
            // I have to add the list in here somewhere..
            // {contacts} (was under <Header />)
            // removed... <h1> Contacts </h1>
            // !removed... <ContactCard /> under header
            // pass in the props to the contact card component
            // passed in the array of contactCard objects into contactCard.js
/*
    {
        contacts.map((contact, index) =>
            <ContactCard
                name={contact.data.name}
                phoneNumber={contact.data.phoneNumber}
                address={contact.data.address}
            />
        )
    }
    */
/*
var i;
for (i = 0; i < contacts.length; i++)
{
    <ContactCard
        name={contacts[i].data.name}
        phoneNumber={contacts[i].data.phoneNumber}
        address={contacts[i].data.address}
    />
}
*/
        // youtube tut

/*
contacts.forEach(function (contact) {
    <ContactCard
        name={contact.data.name}
        phoneNumber={contact.data.phoneNumber}
        address={contact.data.address}
    />
})
*/
}

export default Homepage;
