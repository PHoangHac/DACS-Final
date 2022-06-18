import React, { useState } from "react";
import "./search.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

import { FaSistrix, FaWindowClose } from "react-icons/fa";

const Search = () => {
  const { data } = useFetch("/room");

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  // console.log(data);
  // value.title.toLowerCase().includes(searchWord.toLowerCase())

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.type.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div className="container mb-3">
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm" id="search-bar">
              <div className="card-body row no-gutters align-items-center">
                <div className="col">
                  <input
                    className="form-control form-control-lg form-control-borderless"
                    type="search"
                    placeholder="Enter keyword..."
                    value={wordEntered}
                    onChange={handleFilter}
                  />
                </div>
                <div className="col-auto me-2">
                  {filteredData.length === 0 ? (
                    <FaSistrix className="fs-2 " />
                  ) : (
                    <FaWindowClose
                      className="fs-2 "
                      id="clearBtn"
                      onClick={clearInput}
                    />
                  )}
                </div>
              </div>
              {filteredData.length !== 0 && (
                <div className="dataResult ">
                  {filteredData.map((value) => {
                    return (
                      <div className="card m-4 border-danger" key={value._id}>
                        <h5 className="card-header fs-4 border-bottom border-danger">
                          {value.title}
                        </h5>
                        <div className="card-body ms-2">
                          <h5 className="card-title fs-5">
                            {value.type}{" "}
                            <i className="fa-solid text-info fa-sack-dollar ms-3 me-1"></i>
                            {value.price} Triệu
                            <i className="fa text-info fa-area-chart ms-3 me-1"></i>
                            {value.area} m²
                          </h5>
                          <p className="card-text">{value.desc}</p>

                          <Link
                            to={`/detailRoom/${value._id}`}
                            className="text-light btn btn-primary"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
