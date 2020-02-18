import React from "react";
import axios from "axios";
import Magnifying_Glass from "../../icons/magnifying_glass.png";
import ContactCard from "./ContactCard";
import * as firebase from "firebase/app";
import "firebase/auth";

const SearchList = ({ list }) => {
  return list.map(x => {
    return (
      <ContactCard
        key={x.id}
        name={x.data.name ? x.data.name : ""}
        address={x.data.address ? x.data.address : ""}
        phoneNumber={x.data.phoneNumber ? x.data.phoneNumber : ""}
      />
    );
  });
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      accounts: [],
      userid: null
    };
  }

  componentDidMount() {
    let currentComponent = this;
    // check if user is signed in
    firebase
      .auth()
      .onAuthStateChanged(function(user) {
        if (user) {
          let uid = user.uid;
          let hyper = `https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/users/${uid}/contacts`;

          axios.get(hyper).then(res => {
            const init = [];

            res.data.forEach(x => {
              init.push({ id: x.id, data: x.data });
            });

            currentComponent.setState({ accounts: init, userid: uid });
          });
        }
      })
      .bind(this);
  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  doSearch = e => {
    const searchString = e.target.value;
    this.setState({ search: searchString });

    const searchedAccounts = [];
    firebase
      .firestore()
      .collection(`users/${this.state.userid}/contacts`)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const name = doc.data().name;
          const add = doc.data().address;
          const num = doc.data().phoneNumber;

          if ((name && name.toLowerCase().includes(searchString.toLowerCase())) || (add && add.))
        })
      });
  };

  render() {
    return (
      <div>
        <div className="SearchBar" style={styles.searchWrapper}>
          <i style={styles.imageWrapper}>
            <img src={Magnifying_Glass} alt={"magnify"} style={styles.image} />
          </i>
          <input
            style={styles.searchbar}
            value={this.state.search}
            placeholder="Search"
            onChange={this.doSearch}
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
