import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [showpass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showpass);
  };

  const Navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      Navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5 card-signup">
            <div>{error && <span>{error.message}</span>}</div>
            <h1 className="mt-3">SIGN IN </h1>
            <form>
              <div className="form-input form-signup">
                <label htmlFor="username">Username :</label>
                <i className="fa fa-user"></i>
                <input
                  type="text"
                  id="username"
                  onChange={handleChange}
                  className="form-control form-control-input"
                  placeholder="User name"
                  required
                />
              </div>

              <div className="form-input form-signup">
                <label htmlFor="password">Password :</label>
                <i className="fa fa-lock"></i>
                <input
                  id="password"
                  onChange={handleChange}
                  className="form-control form-control-input"
                  placeholder="password"
                  type={showpass ? "text" : "password"}
                  required
                />
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                  onClick={togglePassword}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Show password
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I agree all the statements
                </label>
              </div>

              <button
                disabled={loading}
                onClick={handleClick}
                className="btn btn-primary mt-4 signup"
              >
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <span>Or login with these social profile</span>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <span className="social">
                <i className="fa fa-google"></i>
              </span>
              <span className="social">
                <i className="fa fa-facebook"></i>
              </span>
              <span className="social">
                <i className="fa fa-twitter"></i>
              </span>
              <span className="social">
                <i className="fa fa-linkedin"></i>
              </span>
            </div>

            <div className="text-center mt-4">
              <span>Don't Have Account?</span>
              <Link to={"/register"} className="text-decoration-none">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
