import React, { useEffect } from "react";
import axios from "axios";
import Magnifying_Glass from "../../icons/magnifying_glass.png";
import ContactCard from "./ContactCard";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const SearchList = ({ list, search }) => {
  const data = list.filter(
    (x, idx) =>
      (x.name && x.name.toLowerCase().includes(search.toLowerCase())) ||
      (x.phoneNumber && x.phoneNumber.includes(search)) ||
      (x.address && x.address.toLowerCase().includes(search.toLowerCase()))
  );

  // console.log(data);
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
    let currentComponent = this;
    // check if user is signed in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in, use their uid for getting their contacts
        let uid = user.uid;
        console.log(uid);
        let hyper =
          "https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/" +
          uid +
          "/contacts";
        console.log(hyper);
        //debugger;
        axios.get(hyper).then(res => {
          currentComponent.setState({
            accounts: res.data.map(x => {
              x.data["id"] = x.id;
              return x.data;
            })
          });
        });
      } else {
      }
    });
  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  handleMessage = e => {
    this.setState({ msg: e.target.value });
  };

  doSearch = e => {
    let currentComponent = this;
    firebase
      .firestore()
      .collection("contacts")
      .where("name", "==", this.state.search)
      .get()
      .then(function(querySnapshot) {
        let searchedAccounts = [];
        querySnapshot.forEach(function(doc) {
          searchedAccounts.push({ id: doc.id, data: doc.data() });
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
        });
        currentComponent.setState({ accounts: searchedAccounts });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
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
          <button onClick={this.doSearch}>Clicky</button>
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
