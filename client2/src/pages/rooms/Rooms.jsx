import React, { useState, useEffect, useCallback } from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import "./room.scss";
import axios from "axios";
import Filter from "../../components/filter/Filter";
import RoomList from "../../components/roomlist/RoomList";
import Empty from "../../components/empty/Empty";
import useFetch from "../../hooks/useFetch";

const Rooms = () => {
  const [dataC, setDataC] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([0, 200]);
  const [resultsFound, setResultsFound] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const { data } = useFetch(`/room`);

  // console.log(data);

  const handleRefresh = (event, value) => {
    setSelectedCategory(null);
    setSelectedRating(null);
    setDataC(data);
    setSelectedPrice([0, 200]);
  };

  const handleFilterPrice = (event, value) => {
    setSelectedPrice(value);
  };

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const FilterRoom = useCallback(async () => {
    let Rooms = await axios.get("/room");
    let Result = Rooms.data;

    //price filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    Result = Result.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    //Category filter
    if (selectedCategory) {
      Result = Result.filter((item) => item.type === selectedCategory);
    }

    //Rating filter
    if (selectedRating) {
      Result = Result.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // console.log(Result);

    setDataC(Result);

    !Result.length ? setResultsFound(false) : setResultsFound(true);
  }, [selectedPrice, selectedCategory, selectedRating]);

  useEffect(() => {
    FilterRoom();
  }, [FilterRoom, selectedPrice, selectedCategory]);

  return (
    <>
      <Header />
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            {/* start filter */}
            <Filter
              handleFilterPrice={handleFilterPrice}
              setSelectedPrice={selectedPrice}
              selectedCategory={selectedCategory}
              selectToggle={handleSelectCategory}
              handleRefresh={handleRefresh}
              selectedRating={selectedRating}
              handleSelectRating={handleSelectRating}
            />
            {/* End filter */}

            <main className="col-md-9">
              <header className="border-bottom border-primary mb-3 pb-3 mt-3">
                <div className="form-inline">
                  <select className="mr-2 form-control" disabled>
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                </div>
              </header>
              
              {resultsFound ? <RoomList list={dataC} /> : <Empty />}
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rooms;
