import React, { useContext } from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../contexts/AuthContext";

const ClickUrl = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Header />}
      <div className="container mt-5 mb-5" style={{ height: "29rem" }}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5 card-reset">
              <h1 className="mt-3 text-center fw-bold">Check Your Email</h1>
              <p className="text-center">
                A link reset password to send your email, please check and click
                to proceed
              </p>
            </div>
          </div>
        </div>
      </div>
      {user && <Footer />}
    </>
  );
};

export default ClickUrl;
