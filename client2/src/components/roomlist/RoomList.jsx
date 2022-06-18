import React, { useState } from "react";
// import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const RoomList = ({ list }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const RoomsPerPage = 3;
  const pagesVisited = pageNumber * RoomsPerPage;

  const pageCount = Math.ceil(list.length / RoomsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // const { data, loading } = useFetch(`/room/?typeRoom=${props.queryName}`);
  const PL = "http://localhost:7070/images/";

  return (
    <>
      {list.slice(pagesVisited, pagesVisited + RoomsPerPage).map((val) => {
        return (
          <article className="card card-product-list mb-2" key={val._id}>
            <div className="row no-gutters">
              <aside className="col-md-3">
                <div className="img-wrap" style={{ height: "100%" }}>
                  <img
                    alt=""
                    src={PL + val.photos[0]}
                    className="img-fluid rounded border border-primary border-3"
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
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={changePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </nav>
    </>
  );
};

export default RoomList;
