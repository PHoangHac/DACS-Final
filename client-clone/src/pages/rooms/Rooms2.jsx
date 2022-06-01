import React from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import "./room.scss";
import SearchText from "../../components/searchText/SearchText";
// import RoomList from "../../components/roomlist/RoomList";
import RoomList2 from "../../components/roomlist/RoomList2";

const Rooms = () => {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-4 search-col h-75">
            <SearchText />
          </div>
          <div className="col-7 room-col">
            <h2>Rooms</h2>
            <RoomList2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
