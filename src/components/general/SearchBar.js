import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: [],
      accounts: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts/"
      )
      .then(res => {
        this.setState({
          data: res.data.map(x => x.data),
          accounts: res.data.map(x => x.data)
        });
      });
  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
    const show = this.state.data.filter(x => {
      let searcher = this.state.search.toLowerCase();

      // If you add more parameters just create more bools here
      let namebool = x.name
        ? x.name.toLowerCase().includes(searcher)
        : undefined;
      let numbool = x.phoneNumber
        ? x.phoneNumber.includes(searcher)
        : undefined;
      let addressbool = x.address
        ? x.address.toLowerCase().includes(searcher)
        : undefined;
      if (namebool || numbool || addressbool) {
        return x;
      }
    });
    this.setState({ accounts: show });
  };

  // Once you add the edit accounts feature throw it in the second return statement
  render() {
    return (
      <div>
        <input onChange={this.handleSearch}></input>
        {this.state.accounts.map((x, idx) => {
          return (
            <div key={idx}>
              {<div>Name: {x.name}</div>}
              {<div>Phone Number: {x.phoneNumber}</div>}
              {<div>Address: {x.address}</div>}
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

const styles = {
  backdrop: {
    position: "fixed",
    backgroundColor: "#222",
    color: " #e6e6e6",
    borderColor: "#e6e6e6",
    width: "100%",
    height: "100%"
  },
  mainWindow: {
    position: "fixed",
    width: "100%"
  }
};

export default SearchBar;
