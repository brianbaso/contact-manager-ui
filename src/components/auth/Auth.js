import React, { useEffect, useState } from "react";
import fire from "../../config/Fire.js";

// Contexts just allow you to pass data down from a parent to child node in our tree
// Without having to explicitly pass it down every single time we make a component
// https://reactjs.org/docs/context.html#classcontexttype

// I'll be honest I'm still iffy on how to use contexts so comments are sparse
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // https://reactjs.org/docs/hooks-effect.html
  // On mount check if a user is still signed in or not
  useEffect(() => {
    fire.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
