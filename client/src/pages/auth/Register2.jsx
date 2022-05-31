import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5 card-signup">
            <h1 className="mt-3">SIGN UP </h1>
            <form>
              <div className="form-input form-signup">
                <label htmlFor="">Email :</label>
                <i className="fa fa-envelope"></i>
                <input
                  type="text"
                  className="form-control form-control-input "
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="form-input form-signup">
                <label htmlFor="">UserName :</label>
                <i className="fa fa-user"></i>
                <input
                  type="text"
                  className="form-control form-control-input"
                  placeholder="User name"
                  required
                />
              </div>

              <div className="form-input form-signup">
                <label htmlFor="">PassWord :</label>
                <i className="fa fa-lock"></i>
                <input
                  type="text"
                  className="form-control form-control-input"
                  placeholder="password"
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

              <button className="btn btn-primary mt-4 signup">Register</button>
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
    </div>
  );
};

export default Register;
