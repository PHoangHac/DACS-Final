import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, color }) => {
  // console.log(value);

  return (
    <div className="rating-wrap mb-3">
      <ul
        className="rating-stars"
        style={{ listStyleType: "none", paddingLeft: 0 }}
      >
        <li className="stars-active w-80">
          <i
            style={{ color }}
            className={
              value >= 1
                ? "fas fa-star"
                : value >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
          <i
            style={{ color }}
            className={
              value >= 2
                ? "fas fa-star"
                : value >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
          <i
            style={{ color }}
            className={
              value >= 3
                ? "fas fa-star"
                : value >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
          <i
            style={{ color }}
            className={
              value >= 4
                ? "fas fa-star"
                : value >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
          <i
            style={{ color }}
            className={
              value >= 5
                ? "fas fa-star"
                : value >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </li>
      </ul>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFBF00",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rating;
