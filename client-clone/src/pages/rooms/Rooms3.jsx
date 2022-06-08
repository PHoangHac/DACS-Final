import React from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import "./room.scss";

import Filter from "../../components/filter/Filter";
import RoomList3 from "../../components/roomlist/RoomList3";

const Rooms3 = () => {
  return (
    <>
      <Header />
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            {/* start filter */}
            <Filter />
            {/* End filter */}

            <RoomList3 />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rooms3;
