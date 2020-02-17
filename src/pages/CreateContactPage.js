import Header from "../components/general/CCHeader.js";
import * as firebase from "firebase/app";
import { useState } from "react";
import React from "react";
import axios from "axios";

const CreateContactPage = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [address, setAddress] = useState("");

    const createContact = () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var uid = user.uid;
                var querystring = require('querystring');
                axios.post('https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/' + uid + '/contacts/', 
                querystring.stringify({
                    name: name,
                    phoneNumber: phoneNumber,
                    address: address 
                })).then(res => {console.log(uid)});
            }
            else {
                console.log("ass");
            }

            window.location.href = "/";
          });
      };

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
        <div style={styles.body}>
            <Header />
            <div1 style={styles.div1}>
                <p>
                    <name1 style={styles.name1}>
                        Name:
                    </name1>
                    <br /> <br />
                    <phone1 style={styles.phone1}>
                        Phone:
                    </phone1>
                    <br /> <br />
                    <label for="address" style={styles.ad1}>
                        Address:
                    </label>
                    <br /> <br />
                    <input onChange={updateName} id="name" placeholder="Name" style={styles.inputLineName}></input>
                    <input onChange={updateNumber} id="number" placeholder="Phone Number" style={styles.inputLineNum}></input>
                    <input onChange={updateAddress} id="address" placeholder="Address" style={styles.inputLineAd}></input>
                    <br /> <br />
                    <button onClick={createContact} style={styles.btn}>
                        Create Contact
                    </button>
                </p>
            </div1>
        </div>
    )
}

const styles = {
    body: {
        overflowX: "hidden",
        backgroundColor: "#33B8F8",
        height: "100vh",
        width: "100%"
    },
    div1: {
        position: "relative",
        background: "#ffffff",
        top: "100px",
        left: "20%",
        paddingTop: "50px",
        paddingLeft: "770px",
        paddingBottom: "60px",
        boxShadow: "3px 3px #808080",
        borderRadius: "5px"
    },
    name1: {
        fontFamily: "Arial",
        color: " #727279",
        fontWeight: "600",
        position: "relative",
        left: "15px",
        top: "-60px"
    },
    phone1: {
        position: "relative",
        fontFamily: "Arial",
        color: " #727279",
        fontWeight: "600",
        left: "15px",
        top: "-67px"
    },
    ad1: {
        position: "relative",
        fontFamily: "Arial",
        color: "#727279",
        fontWeight: "600",
        left: "15px",
        top: "-75px"
    },
    inputLineName: {
        position: "relative",
        width: "40%",
        padding: "2px 10px",
        margin: "8px 0",
        left: "70px",
        bottom: "230px",
        border: "none",
        borderBottom: "2px solid black"
    },
    inputLineNum: {
        position: "relative",
        width: "39.5%",
        padding: "2px 10px",
        margin: "8px 0",
        left: "-435px",
        bottom: "185px",
        border: "none",
        borderBottom: "2px solid black"
    },
    inputLineAd: {
        position: "relative",
        width: "38.5%",
        padding: "2px 10px",
        margin: "8px 0",
        left: "90px",
        bottom: "190px",
        border: "none",
        borderBottom: "2px solid black"
    },
    btn: {
        position: "relative",
        height: "80%",
        left: "630px",
        bottom: "306px",
        padding: "15px 2px",
        boxShadow: "1px 1px #808080",
        borderRadius: "5px",
    
        // Color
        //border: "1px solid white",
        color: "white",
        background:
          "#38BDFD"
      }
  };

export default CreateContactPage;