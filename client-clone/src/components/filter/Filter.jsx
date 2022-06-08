import React from "react";
import "./filter.scss";

const Filter = () => {
  return (
    <>
      <aside className="col-md-3 mt-3">
        <div className="card">
          <article className="filter-group">
            <header className="card-header">
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">Room type</h6>
            </header>
            <div className="filter-content collapse show" id="collapse_1">
              <div className="card-body">
                <ul className="list-menu" style={{ listStyleType: "none" }}>
                  <li>
                    <a href="#">People </a>
                  </li>
                  <li>
                    <a href="#">Watches </a>
                  </li>
                  <li>
                    <a href="#">Cinema </a>
                  </li>
                  <li>
                    <a href="#">Clothes </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">Address </h6>
            </header>
            <div className="filter-content collapse show" id="collapse_2">
              <div className="card-body">
                <div className="form-inline">
                  <select className="mr-2 form-control">
                    <option selected>Select Address</option>
                    <option>District 1</option>
                    <option>District 10</option>
                    <option>District 3</option>
                  </select>
                </div>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">Price range </h6>
            </header>
            <div className="filter-content collapse show" id="collapse_3">
              <div className="card-body">
                <input
                  type="range"
                  className="custom-range"
                  min="0"
                  max="100"
                  name=""
                />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Min</label>
                    <input
                      className="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div className="form-group text-right col-md-6">
                    <label>Max</label>
                    <input
                      className="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />
                  </div>
                </div>
                <button className="btn btn-block btn-primary mt-2">
                  Apply
                </button>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">Sizes </h6>
            </header>
            <div className="filter-content collapse show" id="collapse_4">
              <div className="card-body">
                <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> XS </span>
                </label>

                <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> SM </span>
                </label>

                <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> LG </span>
                </label>

                <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> XXL </span>
                </label>
              </div>
            </div>
          </article>
        </div>
      </aside>
    </>
  );
};

export default Filter;
