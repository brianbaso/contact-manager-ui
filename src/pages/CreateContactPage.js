import React from "react";
import { useState } from "react";
import CreateContact from "../components/CreateContact.js";
import "../components/general/ContactCardStyle.scss";

const CreateContactPage = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [address, setAddress] = useState("");

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateNumber = (e) => {
        setNumber(e.target.value);
    }

    const updateAddress = (e) => {
        setAddress(e.target.value);
    }

    return(
        <div>
            <label for="name">Name</label>
            <input onChange={updateName} id="name" placeholder="Full Name" style={styles.inputBox}></input>

            <label for="number">Phone Number</label>
            <input onChange={updateNumber} id="number" placeholder="Phone Number" style={styles.inputBox}></input>

            <label for="address">Address</label>
            <input onChange={updateAddress} id="address" placeholder="Address" style={styles.inputBox}></input>

            <CreateContact name = {name} phoneNumber = {phoneNumber} address = {address}/>
        </div>
    )
}

const styles = {
    inputBox: {
      backgroundcolor: "#4CAF50",
      border: "none",
      color: "black",
      padding: "14px 20px",
      textalign: "center",
      textdecoration: "none",
      display: "block",
      fontsize: "16px",
      margin: "8px 0",
      cursor: "text"
    },
    CreateContactButn: {
      position: "fixed",
      width: "100%"
    },
    CreateContactButnHover: {
        backgroundcolor: "#45a049"
    },
    background: {
        borderradius: "5px",
        backgroundcolor: "#f2f2f2",
        padding: "20px"
    }
  };

export default CreateContactPage;