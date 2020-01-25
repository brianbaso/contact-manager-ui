import React from 'react';
import { Component } from 'react';
import "./ContactCardStyle.scss";

// this will accept props
class ContactCard extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillRender() {
        console.log(this.props)
    }

    render() {
        return (
            <div4>
                <p>
                    <name1> Name: {this.props.name} </name1> <br /> <br />
                    <phone1> Phone: {this.props.phoneNumber} </phone1> <br /> <br />
                    <ad1> Address: {this.props.address}  </ad1> <br /> <br />
                </p>
            </div4>    
        );
    }


/*
processProps = () => {
   
    return { contactList };
}
this.props.map((this.props, index) =>
            <p key={index}>
*/
/*
 <p>
                {this.props.data.name} <br />
                {this.props.data.phoneNumber} <br />
                {this.props.data.address}
  </p>
 */


/*
        <div4>
            <name1> Name: {this.props.data.} </name1>
            <phone1> Phone: {this.props.data.phoneNumber}</phone1>
            <ad1> Address: {fields.data.address}</ad1>
        </div4>
        */

}


export default ContactCard;