import React from "react";
import "./search.scss";

const Search = () => {
  return (
    <>
      <div className="container container-search">
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search in here..."
            aria-label="Search in here..."
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-success btn-search"
            type="button"
            id="button-addon2"
            style={{ borderRadius: 4 }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
