import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import 'firebase/auth';

// https://reactjs.org/docs/context.html#classcontexttype

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
