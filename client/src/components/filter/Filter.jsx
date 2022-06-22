import React from "react";
import "./filter.scss";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import useFetch from "../../hooks/useFetch";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { RatingStarts } from "../../data/Rating.js";

//custom css slider
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  thumb: {
    color: "#000",
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: "#000",
  },
});

const Filter = ({
  setSelectedPrice,
  handleFilterPrice,
  selectedCategory,
  selectToggle,
  handleRefresh,
  selectedRating,
  handleSelectRating,
}) => {
  // console.log(RatingStarts);

  const classes = useStyles();

  const { data } = useFetch(`/Category`);

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
                <ToggleButtonGroup
                  value={selectedCategory}
                  onChange={selectToggle}
                  size="small"
                  orientation="vertical"
                  exclusive
                >
                  {data.map(({ type, _id }) => (
                    <ToggleButton
                      aria-label="bold"
                      value={type}
                      key={_id}
                      className="text-black"
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket me-1"></i>
                      {type}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </div>
            </div>
          </article>
          {/* <article className="filter-group">
            <header className="card-header">
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">Address </h6>
            </header>
            <div className="filter-content collapse show" id="collapse_2">
              <div className="card-body">
                <div className="form-inline">
                  <select className="mr-2 form-control">
                    <option defaultValue>Select Address</option>
                    <option>District 1</option>
                    <option>District 10</option>
                    <option>District 3</option>
                  </select>
                </div>
              </div>
            </div>
          </article> */}
          <article className="filter-group">
            <header className="card-header">
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">Price range </h6>
            </header>
            <div className="filter-content collapse show" id="collapse_3">
              <div className="card-body">
                <div className={classes.root}>
                  <Slider
                    value={setSelectedPrice}
                    onChange={handleFilterPrice}
                    valueLabelDisplay="on"
                    min={0}
                    max={200}
                    classes={{
                      thumb: classes.thumb,
                      rail: classes.rail,
                      track: classes.track,
                    }}
                  />
                </div>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">Rating </h6>
            </header>
            <div className="filter-content collapse show" id="collapse_4">
              <div className="card-body">
                <ToggleButtonGroup
                  value={selectedRating}
                  onChange={handleSelectRating}
                  size="small"
                  orientation="horizontal"
                  exclusive
                >
                  {RatingStarts.map(({ value, label, id }) => (
                    <ToggleButton
                      aria-label="bold"
                      value={value}
                      key={id}
                      className="text-black me-3 border border-primary"
                    >
                      {/* <i className="fa-solid fa-arrow-right-from-bracket me-1"></i> */}
                      {label}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                {/* <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> 1 ★ </span>
                </label>

                <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> 2 ★ </span>
                </label>

                <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> 3 ★ </span>
                </label>

                <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> 4 ★ </span>
                </label>

                <label className="checkbox-btn">
                  <input type="checkbox" />
                  <span className="btn btn-light"> 5 ★ </span>
                </label> */}
              </div>
            </div>
            <header className="card-header">
              <button onClick={handleRefresh} className="btn btn-primary">
                Refresh
              </button>
            </header>
          </article>
        </div>
      </aside>
    </>
  );
};

export default Filter;
