import React from "react";

const SearchText = () => {
  return (
    <>
      <label htmlFor="basic-url" className="form-label">
        <h2>Filter</h2>
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          Something
        </span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          Min
        </span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          Max
        </span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Address
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Address...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  );
};

export default SearchText;
