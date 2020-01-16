import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Just an empty project used to see how everything worked/looked
// Note: if removing this swap in the actual project right away or won't work
const cors = require("cors");

app.use(cors());

const config = {
  apiKey: "AIzaSyBnBOu7NN7jdq6S5BbkLWBZN2LxHXZnans",
  authDomain: "test-19353.firebaseapp.com",
  databaseURL: "https://test-19353.firebaseio.com",
  projectId: "test-19353",
  storageBucket: "test-19353.appspot.com",
  messagingSenderId: "942139816544",
  appId: "1:942139816544:web:e2cc64aa8d81150fc3a105",
  measurementId: "G-Q4ZB940WPZ"
};
firebase.initializeApp(config);
// const fire = firebase;
// export default fire;

// const firebaseConfig = {
//   apiKey: "AIzaSyBXZKI_f6zs14h121Mno6aWbG0ZjkflcjM",
//   authDomain: "contact-manager-98599.firebaseapp.com",
//   databaseURL: "https://contact-manager-98599.firebaseio.com",
//   projectId: "contact-manager-98599",
//   storageBucket: "contact-manager-98599.appspot.com",
//   messagingSenderId: "470819990763",
//   appId: "1:470819990763:web:50e696ba364eabcd37a2ae",
//   measurementId: "G-4XJFQ7XM3R"
// };

// firebase.initializeApp(firebaseConfig);

// const firebase = firebase.database().ref();
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
