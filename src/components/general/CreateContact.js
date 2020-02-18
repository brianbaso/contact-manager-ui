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
    left: "65%",
    bottom: "7px",
    borderRadius: "20px",

    // Color
    border: "1px solid white",
    color: "#38BDFD",
    background:
      "white"
  }
};

export default CreateContact;
