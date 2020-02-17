import React from "react";

class ContactCard extends React.Component {
  // display in console what the contactCard is getting for props
  componentWillRender() {
    console.log(this.props);
  }

  render() {
    // display a contact card
    return (
      <div4 style={styles.div4}>
        <p>
          <name1 style={styles.name1}> Name: {this.props.name} </name1> <br />{" "}
          <br />
          <phone1 style={styles.phone1}>
            {" "}
            Phone: ({this.props.phoneNumber[0]}
            {this.props.phoneNumber[1]}
            {this.props.phoneNumber[2]}) {this.props.phoneNumber[3]}
            {this.props.phoneNumber[4]}
            {this.props.phoneNumber[5]}-{this.props.phoneNumber[6]}
            {this.props.phoneNumber[7]}
            {this.props.phoneNumber[8]}
            {this.props.phoneNumber[9]}
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
    paddingBottom: "60px",
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
  }
};

export default ContactCard;
