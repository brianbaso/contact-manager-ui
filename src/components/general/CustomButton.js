import React from "react";
import { Button } from "react-bootstrap";

// Necessities:
// Button for list of users
// Button for list of options
// Button for editing information
const SignupBtn = ({ name, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      style={{ marginLeft: "25px" }}
      className="btn btn-success"
    >
      {name}
    </button>
  );
};

const styles = {
  auth: {
    color: "black",
    width: "60%",
    height: "90%"
  }
};

export { SignupBtn };
