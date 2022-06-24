import React, { useContext, useState } from "react";
import "./resetpass.scss";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const { user } = useContext(AuthContext);

  const Navigate = useNavigate();

  // console.log(email);

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/auth/forgot_pass`, {
        email: email,
      });

      // toast.success(
      //   res.data.msg,
      //   {
      //     position: toast.POSITION.TOP_LEFT,
      //     autoClose: 2000,
      //   },
      //   () => {
      //   }
      //   );
      Navigate("/clickUrlEmail");
    } catch (err) {
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      {user && <Header />}
      <div className="container mt-5 mb-5" style={{ height: "29rem" }}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5 card-reset">
              <h1 className="mt-3 text-center fw-bold">Reset Password </h1>
              <form onSubmit={handleSumbit} autoComplete="off">
                <div className="form-input form-reset">
                  <label
                    htmlFor="email"
                    className="badge bg-light text-dark fs-6 mb-1"
                  >
                    Enter your email address :
                  </label>
                  <i className="fa fa-envelope"></i>
                  <input
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-input "
                    placeholder="Email address"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-4 signup fs-5"
                >
                  Send
                </button>
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

export default ForgotPass;
