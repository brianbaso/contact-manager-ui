import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";

// Contexts just allow you to pass data down from a parent to child node in our tree
// Without having to explicitly pass it down every single time we make a component
// https://reactjs.org/docs/context.html#classcontexttype

// I'll be honest I'm still iffy on how to do this part so comments to explain are sparse
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // https://reactjs.org/docs/hooks-effect.html
  // On mount check if a user is still signed in or not
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
