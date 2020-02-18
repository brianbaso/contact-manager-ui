import React from "react";

class ContactCard extends React.Component {
  // display in console what the contactCard is getting for props
  componentWillRender() {
    console.log(this.props);
  }

    render() {
    const num = this.props.phoneNumber;
    let string = num.length >= 3 ? `(${num[0]}${num[1]}${num[2]}) ` : "";
    for (let i = 3; i < 10; i++) {
        if (i === num.length) break;
        string += `${num[i]}`;
        if (i === 5) string += "-";
    }
    // display a contact card
    return (
      <div4 style={styles.div4}>
        <p>
          <name1 style={styles.name1}> Name: {this.props.name} </name1> <br />{" "}
          <br />
          <phone1 style={styles.phone1}>
            {" "}
            Phone: {string}
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
    top: "100px",
    left: "20%",
    paddingTop: "50px",
    paddingLeft: "770px",
    paddingBottom: "60px",
    boxShadow: "3px 3px #808080",
    // TO DO: fix so it works on the right corners
    // a very slight rounded corner
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
    fontWeight: "1000",
    left: "5px",
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