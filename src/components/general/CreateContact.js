import React from "react";
import "firebase/auth";

const CreateContact = ({ name, phoneNumber, address }) => {
  const createContact = () => {
    window.location.href = "/createContact";
  };

  return (
    <button onClick={createContact} style={styles.btn}>
      Create Contact
    </button>
  );
};

const styles = {
  btn: {
    position: "relative",
    height: "80%",
    left: "59%",
    bottom: "7px",
    borderRadius: "5px",

    // Color
    border: "1px solid white",
    color: "white",
    background:
      "linear-gradient(227deg, rgba(3,164,166,1) 38%, rgba(178,31,228,1) 76%, rgba(137,43,235,1) 100%)"
  }
};

export default CreateContact;
