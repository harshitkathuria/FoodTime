import React, { useReducer } from "react";
import axios from "axios";

import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";
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

  // Register User
  const register = async user => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const res = await axios.post("/api/auth/register", user, config);
      dispatch({
        type: REGISTER_USER,
        payload: res.data
      });
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: AUTH_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Login User
  const login = async user => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const res = await axios.post("/api/auth/login", user, config);
      dispatch({
        type: LOGIN_USER,
        payload: res.data
      });
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: AUTH_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        register,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
