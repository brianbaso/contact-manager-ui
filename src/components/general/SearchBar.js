import React from "react";
import axios from "axios";

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

const SearchList = ({ list, search }) => {
  const data = list.filter(
    (x, idx) =>
      (x.name && x.name.toLowerCase().includes(search.toLowerCase())) ||
      (x.phoneNumber && x.phoneNumber.includes(search)) ||
      (x.address && x.address.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {data.map((x, idx) => (
        <Contact
          key={idx}
          show={false}
          contact={x}
          style={{ border: "5px solid white" }}
        />
      ))}
    </div>
  );
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
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts/"
      )
      .then(res => {
        this.setState({
          accounts: res.data.map(x => {
            x.data["id"] = x.id;
            return x.data;
          })
        });
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
        <input onChange={this.handleSearch}></input>
        <SearchList list={this.state.accounts} search={this.state.search} />
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
