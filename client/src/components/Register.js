import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import Alerts from "./Alerts";

const Register = props => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "null"
  });

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { register, error, isAuthenticated, clearErrors } = authContext;

  const { name, email, password, confirmPassword, role } = user;

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push("/home");
    }

    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
    const M = window.M;
    M.FormSelect.init(document.querySelector("select"));
  }, [error, isAuthenticated, props.history]);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSelectChange = e => {
    setUser({ ...user, role: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("Passwords do not match", "primary");
      clearErrors();
    } else if (role === "null") {
      setAlert("Please select a role", "primary");
      clearErrors();
    } else {
      register(user);
    }
  };

  return (
    <div className="form-container container">
      <div className="card">
        <Alerts />
        <div className="card-content">
          <div className="card-title center">
            <h4 style={{ fontWeight: 500 }}>Register Your Account</h4>
          </div>
          <div className="row">
            <form className="col s12 m6 offset-m3" onSubmit={onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={onChange}
                />
                <label htmlFor="name">Name</label>
              </div>
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
                  minLength="8"
                  required
                  values={password}
                  onChange={onChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="confirmPassword"
                  minLength="8"
                  required
                  value={confirmPassword}
                  onChange={onChange}
                />
                <label htmlFor="name">Confirm Password</label>
              </div>
              <div className="input-field">
                <select required value={role} onChange={handleSelectChange}>
                  <option value="null" defaultValue>
                    Choose your option
                  </option>
                  <option value="restaurant">Restaurant Manager</option>
                  <option value="user">Consumer</option>
                </select>
                <label>Apply as</label>
              </div>
              <button
                className="btn waves-effect teal darken-3 submitBtn"
                type="submit"
                value="Register"
              >
                Register
              </button>
            </form>
            <div className="row">
              <div className="col s12 m6 offset-m3">
                <p className="small">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
