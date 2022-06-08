import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const RoomList3 = () => {
  const { data, loading } = useFetch("/room");

  return (
    <>
      <main className="col-md-9">
        <header className="border-bottom mb-4 pb-3 mt-3">
          <div className="form-inline">
            <select className="mr-2 form-control">
              <option>Latest items</option>
              <option>Trending</option>
              <option>Most Popular</option>
              <option>Cheapest</option>
            </select>
          </div>
        </header>

        {loading ? (
          "loading"
        ) : (
          <>
            {data.map((val) => {
              return (
                <article className="card card-product-list mb-2" key={val._id}>
                  <div className="row no-gutters">
                    <aside className="col-md-3">
                      <div className="img-wrap">
                        <img
                          src={val.photos[0]}
                          className="img-fluid rounded-start rounded-end"
                        />
                      </div>
                    </aside>
                    <div className="col-md-6">
                      <div className="info-main">
                        <div className="h5 title"> {val.title} </div>
                        <div className="rating-wrap mb-3">
                          <ul
                            className="rating-stars"
                            style={{ listStyleType: "none" }}
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
                      <div className="info-aside">
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
          </>
        )}

        <nav className="mt-4" aria-label="Page navigation sample">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default RoomList3;
