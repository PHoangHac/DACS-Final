import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./auth.scss";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7070/api/auth/register", {
        username: username,
        password: password,
        email: email,
        address: address,
        phone: phone,
      });
      alert("Register Successfull !");
      Navigate("/login");
    } catch (err) {
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 10000,
      });
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5 card-signup">
            <h1 className="mt-3">SIGN UP </h1>
            <form onSubmit={handelClick} autoComplete="off">
              <div className="form-input form-signup">
                <label htmlFor="email">Email :</label>
                <i className="fa fa-envelope"></i>
                <input
                  type="text"
                  id="email"
                  className="form-control form-control-input "
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-input form-signup">
                <label htmlFor="username">Username :</label>
                <i className="fa fa-user"></i>
                <input
                  type="text"
                  id="username"
                  className="form-control form-control-input"
                  placeholder="User name"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>

              <div className="form-input form-signup">
                <label htmlFor="password">Password :</label>
                <i className="fa fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-input"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="on"
                />
              </div>

              <div className="form-input form-signup">
                <label htmlFor="address">Address :</label>
                <i className="fa-solid fa-address-card"></i>
                <input
                  type="text"
                  id="address"
                  className="form-control form-control-input"
                  placeholder="address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="form-input form-signup">
                <label htmlFor="phone">Phone :</label>
                <i className="fa-solid fa-phone"></i>
                <input
                  type="text"
                  id="phone"
                  className="form-control form-control-input"
                  placeholder="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
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
                onSubmit={handelClick}
                className="btn btn-primary mt-4 signup"
              >
                Register
              </button>
            </form>

            <div className="text-center mt-3">
              <span>Or continue with these social profile</span>
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
              <span>Already a member?</span>
              <Link to={"/login"} className="text-decoration-none">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
