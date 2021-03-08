import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  });

  const { name, email, password, confirmPassword, role } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSelectChange = e => {
    setUser({ ...user, role: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="form-container container">
      <div className="card">
        <div className="card-content">
          <div className="card-title center">
            <h4 style={{ fontWeight: 500 }}>Register Your Account</h4>
          </div>
          <div className="row">
            <form className="col s6 offset-s3" onSubmit={onSubmit}>
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
                <select
                  // className="browser-default"
                  value={role}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>
                    Choose your option
                  </option>
                  <option value="Restaurant Manager">Restaurant Manager</option>
                  <option value="Consumer">Consumer</option>
                </select>
                <label>Apply as</label>
              </div>
              <button
                className="btn waves-effect teal darken-3"
                type="submit"
                value="Register"
              >
                Register
              </button>
            </form>
            <div className="row">
              <div className="col s6 offset-s3">
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
