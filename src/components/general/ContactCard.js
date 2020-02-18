import React from "react";
import firebase from 'firebase';
import axios from 'axios';
import querystring from 'querystring';

class ContactCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditFields: false,
      name: '',
      phoneNumber: '',
      address: ''
    };

    this.updateName = this.updateName.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateNumber(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  updateAddress(event) {
    this.setState({
      address: event.target.value
    });
  }

  toggleEdit() {
    this.setState(state => ({ showEditFields: !state.showEditFields }));
  }

  editContact(contactId) {
    let newName = this.state.name;
    let newPhoneNumber = this.state.phoneNumber;
    let newAddress = this.state.address;

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in, use their uid for getting their contacts
            var uid = user.uid;
            var hyper = "https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/" + uid + "/contacts/" + contactId;
            axios
                .put(
                    hyper,
                    querystring.stringify({
                        name: newName,
                        phoneNumber: newPhoneNumber,
                        address: newAddress
                    })
                )
                .then(res => {
                  // refresh page if successful edit
                  window.location = '/';
                })
                .catch(e => {
                    console.log("Error getting contacts", e);
                });
        }
    });
  }

  deleteContact(contactId, name) {
    // check if user is signed in
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in, use their uid for getting their contacts
            var uid = user.uid;
            var confirmation = window.confirm("Are you sure you want to delete " + name + "'s contact?");

            if (confirmation == true) {
                var hyper = "https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/" + uid + "/contacts/" + contactId;
                axios
                    .delete(
                        hyper
                    )
                    .then(res => {
                        // refresh page if successful delete
                        window.location = '/';
                    })
                    .catch(e => {
                        console.log("Error getting contacts", e);
                    });
            }
        }
    });
  }

  render() {
    return (
        <div4 style={styles.div4}>
          { this.state.showEditFields ?
            <p>
              <name1 style={styles.name1}>
                  Name: <input onChange={this.updateName} id="name" placeholder={this.props.name} style={styles.inputLineName}></input>
              </name1>
              <br /> <br />
              <phone1 style={styles.phone1}>
                  Phone: <input onChange={this.updateNumber} id="number" placeholder={this.props.phoneNumber} style={styles.inputLineNum}></input>
              </phone1>
              <br /> <br />
              <label for="address" style={styles.ad1}>
                  Address: <input onChange={this.updateAddress} id="address" placeholder={this.props.address} style={styles.inputLineAd}></input>
                  <button onClick={() => { this.editContact(this.props.contactId) }}>
                      Submit
                  </button>
              </label>
              <br /> <br />
            </p>
          :
            <p>
                    <name1 style={styles.name1}> Name: {this.props.name} <button style={styles.btn2} onClick={() => { this.toggleEdit() }}>Edit</button></name1> <br />{" "}
              <br />
              <phone1 style={styles.phone1}>
                {" "}
                        Phone: {this.props.phoneNumber} <button style={styles.btn1} onClick={() => { this.deleteContact(this.props.contactId, this.props.name) }}>Delete</button>
              </phone1>{" "}
              <br /> <br />
              <ad1 style={styles.ad1}> Address: {this.props.address} </ad1>
            </p>
          }
        </div4>
    );
  }
}

const styles = {
  // This is the white box for each of the contactCards
  div4: {
    position: "relative",
    background: "#ffffff",
    top: "90px",
    left: "20%",
    paddingTop: "50px",
    paddingLeft: "1160px",
    paddingBottom: "90px",
    boxShadow: "3px 3px #808080",
    borderRadius: "5px"
  },

  // name line for the contact card
  name1: {
    fontFamily: "Arial",
    color: " #727279",
    fontWeight: "600",
    position: "relative",
    left: "15px",
    top: "-67px"
  },

  // phone line for the contact card
  phone1: {
    position: "relative",
    fontFamily: "Arial",
    color: " #727279",
    fontWeight: "600",
    left: "15px",
    top: "-67px"
  },

  // address line for the contact card
  ad1: {
    position: "relative",
    fontFamily: "Arial",
    color: "#727279",
    fontWeight: "600",
    left: "15px",
    top: "-75px"
    }
};

export default ContactCard;
