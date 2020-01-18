import React, { useState, useEffect } from "react";
import Logout from "../components/auth/Logout";
import axios from "axios";

class HomePage extends React.Component {
  componentDidMount() {
    axios
      .get("https://test-19353.firebaseio.com")
      .then(res => console.log(res));
  }

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://cors-anywhere.herokuapp.com/https://us-central1-contact-manager-98599.cloudfunctions.net/webAPI/api/v1/contacts/"
  //     )
  //     .then(res => {
  //       const array = res.data;

  //       for (let i = 0; i < array.length; i++) {
  //         let name = array[i].data.name;
  //         let num = array[i].data.phoneNumber;
  //       }
  //       console.log(array);
  //     });
  //   //.then(res => console.log(res.data));
  // }, []);

  render() {
    return (
      <div style={styles.backdrop}>
        <div className="header">
          <h1>Main Page Insert Content here</h1>
          <Logout />
        </div>

        <div className="search">
          <input></input>
        </div>
      </div>
    );
  }
}
// const HomePage = () => {
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios.get("https://test-19353.firebaseio.com");
//   }, []);

//   return (
//     <div style={styles.backdrop}>
//       <div className="header">
//         <h1>Main Page Insert Content here</h1>
//         <Logout />
//       </div>

//       <div className="search">
//         <input></input>
//       </div>
//     </div>
//   );
// };

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

export default HomePage;
