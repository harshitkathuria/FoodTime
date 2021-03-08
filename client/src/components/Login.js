import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="form-container container">
      <div className="card">
        <div className="card-content">
          <div className="card-title center">
            <h4 style={{ fontWeight: 500 }}>Login to your account</h4>
          </div>
          <div className="row">
            <form className="col s6 offset-s3" onSubmit={onSubmit}>
              <div className="input-field">
                <input type="email" name="email" required value={email} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                />
                <label htmlFor="password">Password</label>
              </div>
              <button
                className="btn waves-effect teal darken-3"
                type="submit"
                value="Login"
              >
                Login
              </button>
            </form>
            <div className="row">
              <div className="col s6 offset-s3">
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
