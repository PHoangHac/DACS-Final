import React from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import DetailRoom from "../../components/details/DetailRoom";
import UserDetail from "../../components/details/UserDetail";

const Details = () => {
  return (
    <>
      <Header />

      <div className="container mt-3 container-detail">
        <div className="row">
          <div className="col-8">
            <DetailRoom />
          </div>

          <div className="col-4">
            <UserDetail />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Details;
