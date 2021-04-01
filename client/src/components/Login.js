import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Alerts from "./Alerts";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, isAuthenticated, clearErrors } = authContext;
  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push("/home");
    }

    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(user);
  };

  return (
    <div className="form-container container">
      <div className="card">
        <Alerts />
        <div className="card-content">
          <div className="card-title center">
            <h4 style={{ fontWeight: 500 }}>Login to your account</h4>
          </div>
          <div className="row">
            <form className="col s12 m6 offset-m3" onSubmit={onSubmit}>
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={onChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={onChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <button
                className="btn waves-effect teal darken-3 submitBtn"
                type="submit"
                value="Login"
              >
                Login
              </button>
            </form>
            <div className="row">
              <div className="col s12 m6 offset-m3">
                <p className="small">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
