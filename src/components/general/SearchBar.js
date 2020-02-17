import React from "react";
import axios from "axios";
import Magnifying_Glass from "../../icons/magnifying_glass.png";
import ContactCard from "./ContactCard";
import * as firebase from "firebase/app";
import "firebase/auth"

const SearchList = ({ list, search }) => {
  const data = list.filter(
    (x, idx) =>
      (x.name && x.name.toLowerCase().includes(search.toLowerCase())) ||
      (x.phoneNumber && x.phoneNumber.includes(search)) ||
      (x.address && x.address.toLowerCase().includes(search.toLowerCase()))
  );

  return data.map((x, idx) => (
    <ContactCard
      key={idx}
      name={x.name}
      address={x.address}
      phoneNumber={x.phoneNumber}
      contactId={x.id}
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

    componentDidMount() {
    let currentComponent = this;
        // check if user is signed in
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in, use their uid for getting their contacts
                var uid = user.uid;
                var hyper = "https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/" + uid + "/contacts";
                axios
                    .get(
                        hyper
                    )
                    .then(res => {
                        currentComponent.setState({
                            accounts: res.data.map(x => {
                                x.data["id"] = x.id;
                                return x.data;
                            })
                        });
                    });
            }
        });
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
            <img src={Magnifying_Glass} alt={'magnify'} style={styles.image} />
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
    positon: "relative",
    width: "76.5%",
    borderRadius: "3px",
    textAlign: "left",
    height: "40px",
    marginTop: "0px",
    paddingRight: "10px",
    paddingLeft: "15px",
    // position from left of page
    marginLeft: "6.6%",
    // This makes the text go to the right of the search button
    padding: "12px 43px"
  },
  imageWrapper: {
    position: "relative",
    padding: "10px",
    pointerEvents: "none"
  },
  image: {
    width: "3.8%",
    height: "3.8%",
    position: "relative",
    bottom: "3px",
    left: "11.5%"
  }
};

export default SearchBar;
