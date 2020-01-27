import React from 'react';
import "./ContactCardStyle.scss";


class ContactCard extends React.Component {
    // display in console what the contactCard is getting for props
    componentWillRender() {
        console.log(this.props)
    }

    render() {
        // display a contact card
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

}


export default ContactCard;