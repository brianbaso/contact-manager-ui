import React from 'react';
import axios from 'axios';
import "./ContactCardStyle.scss";
import "./Buttons.css";
import LoginPage from './pages/LoginPage'
class ContactCard extends React.Component {

    constructor(props)
    {
        super(props);

        this.contactId = props.id;
        console.log(this.contactId);
    }
    // display in console what the contactCard is getting for props
    componentWillRender() {
    }

   onDelete()
   {
       console.log(this.contactId);
        axios.delete(`https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts/${this.contactId}`)
            .then(response => {
                console.log(response);
            this.props.history.push('/Login');
            }).catch(err => console.log(err));
    }
    render() {
        // display a contact card
        return (
            <div4>
                <p>
                    <name1> Name: {this.props.name} </name1> <br /> <br />
                    <phone1> Phone: ({this.props.phoneNumber[0]}{this.props.phoneNumber[1]}{this.props.phoneNumber[2]}) {this.props.phoneNumber[3]}{this.props.phoneNumber[4]}{this.props.phoneNumber[5]}-{this.props.phoneNumber[6]}{this.props.phoneNumber[7]}{this.props.phoneNumber[8]}{this.props.phoneNumber[9]}
                    </phone1> <br /> <br />
                    <ad1> Address: {this.props.address}  </ad1>
                </p>
                <button id="delButton" onClick={this.onDelete.bind(this)} className = "delButton">Delete</button>
            </div4>
        );
    }

}


export default ContactCard;
