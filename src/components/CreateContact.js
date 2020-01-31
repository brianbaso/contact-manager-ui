import React from "react";
import axios from "axios";
import "./general/ContactCardStyle.scss";

const CreateContact = ({name, phoneNumber, address}) => {
  // sends contact information to database
  const createContact = () => {
    axios.post('https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts', {
        name: name,
        phoneNumber: phoneNumber,
        address: address
    }).then(res => {console.log(name)});
  };

  return (
        // display button which, when clicked, sends info to database
        // should probably change this in favor of event handler
        <div>
          <button onClick={createContact} style={styles.butn}>
            Create Contact
          </button>
        </div>
  );
};

const styles = {
  butn: {
    width: "80%",
    font: "Arial",
    backgroundcolor: "#4CAF50",
    color: "black",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderradius: "4px",
    cursor: "pointer",
    hover: "#45a049"
  },
  mainWindow: {
    position: "fixed",
    width: "100%"
  }
};

export default CreateContact;