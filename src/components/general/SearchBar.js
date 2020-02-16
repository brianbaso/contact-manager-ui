import React from "react";
import axios from "axios";
import Magnifying_Glass from "../../icons/magnifying_glass.png";
import ContactCard from "./ContactCard";
import * as firebase from "firebase/app";
import "firebase/auth";

const SearchList = ({ list, search }) => {
  const data = list.filter(
    (x, idx) =>
      (x.name && x.name.toLowerCase().includes(search.toLowerCase())) ||
      (x.phoneNumber && x.phoneNumber.includes(search)) ||
      (x.address && x.address.toLowerCase().includes(search.toLowerCase()))
  );

  // key={contact.id}
  // name={contact.data.name}
  // address={contact.data.address}
  // phoneNumber={contact.data.phoneNumber}
  // style={styles.ContactCard}

  // When done, just throw in the contact component in here, like so
  /*
  {data.map((x, idx) => (
        <Contact
          key={idx}
          show={false}
          contact={x}
          style={{ border: "5px solid white" }}
        />
      ))}
  */

  return data.map((x, idx) => (
    <ContactCard
      key={idx}
      name={x.name}
      address={x.address}
      phoneNumber={x.phoneNumber}
    />
  ));
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      accounts: [],
      msg: ""
    };
  }

  componentWillMount() {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user)
          axios
            .get(
              `https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/${user.uid}/contacts/`
            )
            .then(res => {
              console.log(res.data);
              this.setState({
                accounts: res.data.map(x => {
                  x.data["id"] = x.id;
                  return x.data;
                })
              });
            });
      })
      .bind(this);
  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  handleMessage = e => {
    this.setState({ msg: e.target.value });
  };

  send = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="SearchBar" style={styles.searchWrapper}>
          <i style={styles.imageWrapper}>
            <img src={Magnifying_Glass} style={styles.image} />
          </i>
          <input
            style={styles.searchbar}
            value={this.state.search}
            placeholder="Search"
            onChange={this.handleSearch}
          ></input>
        </div>
        <div className="SearchList">
          <SearchList list={this.state.accounts} search={this.state.search} />
        </div>
      </div>
    );
  }
}

const styles = {
  searchWrapper: {
    margin: "auto",
    width: "80%"
  },
  searchbar: {
    margin: "auto",
    width: "100%",
    borderRadius: "3px",
    textAlign: "right",
    padding: "5px",
    paddingRight: "15px",
    paddingLeft: "15px"
  },
  imageWrapper: {
    position: "absolute",
    padding: "10px",
    pointerEvents: "none"
  },
  image: {
    width: "7%",
    height: "7%",
    position: "relative",
    bottom: "7px",
    right: "1%"
  }
};

export default SearchBar;
