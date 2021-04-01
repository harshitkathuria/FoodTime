import React, { useReducer } from "react";
import axios from "axios";

import {
  REGISTER_USER,
  LOGIN_USER,
  USER_LOADED,
  AUTH_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

import setAuthToken from "../../components/utils/setAuthToken";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    loading: true,
    isAuthenticated: null,
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
        payload: res.data.data
      });
      loadUser();
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
        payload: res.data.data
      });
      loadUser();
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: AUTH_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Set token and load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({ type: AUTH_FAIL });
    }
  };

  // Logout
  const logout = () => {
    setAuthToken();
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
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        register,
        login,
        logout,
        loadUser,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
