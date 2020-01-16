import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

// Use this component for anything you want hidden behind user authentication
// Shouldn't really need to touch this

// Routes handle just going to different webpages
// (x)/ => (x)/home => (x)/home/users, etc etc.
// https://reacttraining.com/react-router/web/guides/quick-start

// Take the props given to it, and destructure it so we can call it normally
// Instead of needing to call this.props....everytime
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  // Check if a current user is logged in currently
  const { currentUser } = useContext(AuthContext);

  // If they are logged in, they can view whatever they want
  // Else if they are not logged in, we want them to only view the login page
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/authentication"} />
        )
      }
    />
  );
};

export default PrivateRoute;
