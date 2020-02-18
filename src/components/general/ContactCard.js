import React from "react";
import firebase from "firebase";
import axios from "axios";
import Trash_Can from "../../icons/TrashCan.png";
import querystring from "querystring";
class ContactCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditFields: false,
      name: "",
      phoneNumber: "",
      address: ""
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

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in, use their uid for getting their contacts
        var uid = user.uid;
        var hyper =
          "https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/" +
          uid +
          "/contacts/" +
          contactId;
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
            window.location = "/";
          })
          .catch(e => {
            console.log("Error getting contacts", e);
          });
      }
    });
  }

  deleteContact(contactId) {
    // check if user is signed in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in, use their uid for getting their contacts
        var uid = user.uid;
        var hyper =
          "https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/" +
          uid +
          "/contacts/" +
          contactId;
        axios
          .delete(hyper)
          .then(res => {
            // refresh page if successful delete
            window.location = "/";
          })
          .catch(e => {
            console.log("Error getting contacts", e);
          });
      }
    });
  }

  render() {
    const num = this.props.phoneNumber;
    let string = num.length >= 3 ? `(${num[0]}${num[1]}${num[2]}) ` : "";
    for (let i = 3; i < 10; i++) {
      if (i === num.length) break;
      string += `${num[i]}`;
      if (i === 5) string += "-";
    }

    return (
      <div4 style={styles.div4}>
        <p>
          <name1 style={styles.name1}> Name: {this.props.name} </name1> <br />{" "}
          <br />
          <phone1 style={styles.phone1}>
            {" "}
            Phone: {string}
            <button
              style={styles.btn}
              onClick={() => {
                this.deleteContact(this.props.contactId);
              }}
            >
              <i style={styles.imageWrapper}>
                <img src={Trash_Can} alt={"trash"} style={styles.image} />
              </i>
            </button>
          </phone1>{" "}
          <br /> <br />
          <ad1 style={styles.ad1}> Address: {this.props.address} </ad1>
        </p>
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
    paddingLeft: "770px",
    paddingBottom: "80px",
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
    top: "-60px"
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
  },

  btn: {
    position: "relative",
    height: "3%",
    width: "3%",
    left: "43%",
    top: "-50px"
  },

  imageWrapper: {
    position: "relative",
    padding: "10px",
    pointerEvents: "none"
  },

  image: {
    position: "relative",
    width: "120%",
    height: "100%",
    bottom: "1%",
    left: "-50%"
  }
};

export default ContactCard;
