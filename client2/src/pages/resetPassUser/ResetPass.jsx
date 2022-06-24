import React, { useContext, useState } from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ResetPass = () => {
  const { user, dispatch } = useContext(AuthContext);

  const { token } = useParams();

  const [password, setPassWord] = useState("");
  const [Repassword, setRePassWord] = useState("");
  const [showpass, setShowPass] = useState(false);

  const [disabled, setDisabled] = useState(false);

  const togglePassword = () => {
    setShowPass(!showpass);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      if (password === Repassword) {
        const res = await axios.post(
          `http://localhost:7070/api/auth/reset_pass`,
          {
            password: password,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
        await axios.get("/auth");
        dispatch({ type: "LOGOUT" });
        // toast.info(CustomToastWithLink, {
        //   position: toast.POSITION.TOP_LEFT,
        //   autoClose: false,
        //   closeOnClick: false,
        // });
        // console.log(res.data);
      } else {
        toast.error("Password not match !", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
        // console.log("Password not match !");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const CustomToastWithLink = () => (
  //   <div>
  //     <Link to="/login">Click here to Login</Link>
  //   </div>
  // );

  return (
    <>
      {user && <Header />}
      <div className="container mt-5 mb-5" style={{ height: "29rem" }}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5 card-reset">
              <h1 className="mt-3 text-center fw-bold">Update Password </h1>
              <form onSubmit={handleSumbit} autoComplete="off">
                <div className="form-input form-reset">
                  <label
                    htmlFor="password"
                    className="badge bg-light text-dark fs-6 mb-1"
                  >
                    Enter your password :
                  </label>
                  <i className="fa fa-lock"></i>
                  <input
                    type={showpass ? "text" : "password"}
                    id="password"
                    disabled={disabled}
                    onChange={(e) => setPassWord(e.target.value)}
                    className="form-control form-control-input "
                    placeholder="Your password..."
                    required
                  />
                </div>
                <div className="form-input form-reset">
                  <label
                    htmlFor="Repeatpassword"
                    className="badge bg-light text-dark fs-6 mb-1"
                  >
                    Enter your password agian :
                  </label>
                  <i className="fa fa-lock"></i>
                  <input
                    type={showpass ? "text" : "password"}
                    id="Repeatpassword"
                    disabled={disabled}
                    onChange={(e) => setRePassWord(e.target.value)}
                    className="form-control form-control-input "
                    placeholder="Repeat password..."
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
                  <label
                    className="form-check-label fw-bold"
                    htmlFor="flexCheckChecked"
                  >
                    Show password
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-4 signup fs-5"
                  disabled={disabled}
                >
                  Submit
                </button>

                {disabled && (
                  <button
                    type="submit"
                    className="btn btn-danger mt-4 signup fs-5 "
                  >
                    <Link to="/login" className="text-light">
                      Click here to Login
                    </Link>
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      {user && <Footer />}
    </>
  );
};

export default ResetPass;
