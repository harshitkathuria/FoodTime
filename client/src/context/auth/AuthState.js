import React, { useReducer } from "react";
import axios from "axios";

import { REGISTER_USER, LOGIN_USER, AUTH_FAIL } from "../types";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = props => {
  const initialState = {
    user: null,
    loading: true,
    isAuthenticated: false,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        register,
        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
