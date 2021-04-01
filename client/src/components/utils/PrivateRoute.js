import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated !== null &&
        (isAuthenticated === true && !loading ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        ))
      }
    />
  );
};

export default PrivateRoute;
