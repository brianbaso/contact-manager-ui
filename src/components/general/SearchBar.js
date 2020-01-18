import React from "react";
import axios from "axios";

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
    const show = this.state.accounts.filter(x => {
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

  handleMessage = e => {
    this.setState({ msg: e.target.value });
  };

  send = e => {
    console.log(e.target.value);
  };

  // just comment out/delete the messaging thing if it conflicts with anything
  // just doing stretchy stretch goals
  // const msgurl = `https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts/${x.id}/msg`,

  // Once you add the edit accounts feature throw it in the second return statement
  render() {
    return (
      <div>
        <input onChange={this.handleSearch}></input>
        {this.state.accounts.map((x, idx) => {
          return (
            <div key={idx}>
              {
                <div>
                  Name: {x.name ? x.name : "N/A"}
                  <br />
                  Phone Number: {x.phoneNumber ? x.phoneNumber : "N/A"}
                  <br />
                  Address: {x.address ? x.address : "N/A"}
                  <br />
                  <input type="text" onChange={this.handleMessage} />
                  <button
                    onClick={() => {
                      const msg = this.state.msg;
                      axios
                        .put(
                          `https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts/`,
                          { msg }
                        )
                        .then(res => console.log(res))
                        .catch(e => {
                          console.log(e);
                        });
                    }}
                  >
                    Msg
                  </button>
                </div>
              }
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
