import React from "react";
import "firebase/auth";

const CreateContact = ({name, phoneNumber, address}) => {
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
    left: "63.2%",
    bottom: "7px",
    borderRadius: "5px",

    // Color
    border: "1px solid white",
    color: "rgb(56, 189, 253)",
    background:
      "white"
  }
};

export default CreateContact;
