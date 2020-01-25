import React from "react";

// Temporary way to view contact information
// Replace with actual way
const Contact = ({ show, contact }) => {
  const editUser = () => console.log("Clicked");
  const deleteUser = () => console.log("Deleted");
  return (
    <div>
      <div style={{ border: "5px solid white" }}>
        Name: {contact.name ? contact.name : "N/A"}
        <br />
        Phone Number: {contact.phoneNumber ? contact.phoneNumber : "N/A"}
        <br />
        Address: {contact.address ? contact.address : "N/A"}
        <br />
        <button onClick={editUser}>Select</button>
        <button onClick={deleteUser}>Delete</button>
      </div>
      <div style={{ paddingBottom: "1%" }} />
    </div>
  );
};

export default Contact;
