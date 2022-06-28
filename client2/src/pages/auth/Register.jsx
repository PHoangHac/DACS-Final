import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./auth.scss";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Repassword, setRePassWord] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showpass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showpass);
  };

  const Navigate = useNavigate();

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      if (password === Repassword) {
        await axios.post("http://localhost:7070/api/auth/register", {
          username: username,
          password: password,
          email: email,
          address: address,
          phone: phone,
        });
        Navigate("/login");
      } else {
        toast.error("Password not match !", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
      }
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
            <form
              onSubmit={handelClick}
              autoComplete="off"
              className="needs-validation"
            >
              <div className="form-input form-signup">
                <label htmlFor="email">Email :</label>
                <i className="fa fa-envelope"></i>
                <input
                  type="text"
                  id="email"
                  className="form-control form-control-input "
                  placeholder="Email address"
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}
                  title="Must includes @gmail.com"
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
                  pattern="^[A-Za-z0-9]{5,12}$"
                  title="Username should be 5-12 characters and shouldn't include any special character!"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>

              <div className="form-input form-signup">
                <label htmlFor="password">Password :</label>
                <i className="fa fa-lock"></i>
                <input
                  type={showpass ? "text" : "password"}
                  id="password"
                  className="form-control form-control-input"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
                  title="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
                  autoComplete="on"
                />
              </div>
              <div className="form-input form-signup">
                <label htmlFor="Repassword">Repeat password :</label>
                <i className="fa fa-lock"></i>
                <input
                  type={showpass ? "text" : "password"}
                  id="Repassword"
                  className="form-control form-control-input"
                  placeholder="********"
                  onChange={(e) => setRePassWord(e.target.value)}
                  required
                  autoComplete="on"
                />
              </div>

              {/* 
              - {8,20} length at least 8 characters and maximum of 20 /độ dài ít nhất 8 ký tự và tối đa là 20
              - ?=.*[0-9] - must contains one digit from 0-9 / phải chứa một chữ số từ 0-9
              - ?=.*[a-zA-Z] - must contains one lowercase and one uppercase characters / phải chứa một ký tự viết thường/ viết hoa
              - ?=.*[!@#$%^&*] - must contains one special symbols in the list "!@#$%^&*" / phải chứa một ký hiệu đặc biệt trong danh sách "!@#$%^&*"
              - [a-zA-Z0-9!@#$%^&*] - có thể nhập được chữ số , ký tự và ký tự đặt biệt
               */}
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
                  pattern="^[0-9\-\+]{10,11}$"
                  title="Phone number should be 10-11 number and shouldn't include any special character or character!"
                  onChange={(e) => setPhone(e.target.value)}
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
                onSubmit={handelClick}
                className="btn btn-primary mt-4 signup fs-5 fw-bold "
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
              <Link
                to={"/login"}
                className="text-decoration-none ms-1 fw-bold"
                id="btn-signin"
              >
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
