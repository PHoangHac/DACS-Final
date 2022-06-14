import React, { useState, useEffect } from "react";
// import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const RoomList = ({ list }) => {
  // const { data, loading } = useFetch(`/room/?typeRoom=${props.queryName}`);

  return (
    <>
      {list.map((val) => {
        return (
          <article className="card card-product-list mb-2" key={val._id}>
            <div className="row no-gutters">
              <aside className="col-md-3">
                <div className="img-wrap" style={{ height: "100%" }}>
                  <img
                    alt=""
                    src={val.photos[0]}
                    className="img-fluid rounded border border-warning"
                    style={{ height: "100%" }}
                  />
                </div>
              </aside>
              <div className="col-md-6">
                <div className="info-main mt-3">
                  <div className="h5 title"> {val.title} </div>
                  <div className="rating-wrap mb-3">
                    <ul
                      className="rating-stars"
                      style={{ listStyleType: "none", paddingLeft: 0 }}
                    >
                      <li className="stars-active w-80">
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>

                  <p> {val.desc} </p>
                </div>
              </div>
              <aside className="col-sm-3">
                <div className="info-aside mt-3">
                  <div className="price-wrap">
                    <span className="price h5"> {val.price} Triệu </span>
                  </div>
                  <p className="text-success">{val.status}</p>
                  <br />
                  <p>
                    <button className="btn btn-primary btn-block">
                      <Link
                        to={`/detailRoom/${val._id}`}
                        className="text-light"
                      >
                        Detail
                      </Link>
                    </button>
                    <button className="btn btn-danger btn-block mt-2">
                      <i className="fa fa-heart"></i>
                      <span className="text">Add to wishlist</span>
                    </button>
                  </p>
                </div>
              </aside>
            </div>
          </article>
        );
      })}

      <nav className="mt-4" aria-label="Page navigation sample">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="!#">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="!#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="!#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="!#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="!#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default RoomList;
