import React from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import "./room.scss";
import Filter from "../../components/filter/Filter";
import CategoryRoom from "../../components/roomlist/CategoryRoom";

const CategoriesR = () => {
  return (
    <>
      <Header />
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            {/* start filter */}
            <Filter />
            {/* End filter */}

            <CategoryRoom />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoriesR;
