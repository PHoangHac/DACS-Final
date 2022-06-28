import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Rating from "../../components/roomlist/Rating";

const CategoryRoom = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(`/category/AllRoom/${id}`);

  const [pageNumber, setPageNumber] = useState(0);

  const RoomsPerPage = 3;
  const pagesVisited = pageNumber * RoomsPerPage;

  const pageCount = Math.ceil(data.length / RoomsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const PL = "http://localhost:7070/images/";

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
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {data
              .slice(pagesVisited, pagesVisited + RoomsPerPage)
              .map((val) => {
                return (
                  <article
                    className="card card-product-list mb-2"
                    key={val._id}
                  >
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
                          <Rating value={val.rating} />

                          <p> {val.desc} </p>
                        </div>
                      </div>
                      <aside className="col-sm-3">
                        <div className="info-aside mt-3">
                          <div className="price-wrap">
                            <span className="price h5">
                              {" "}
                              {val.price} Triệu{" "}
                            </span>
                          </div>
                          <p className="text-success">{val.status}</p>
                          <p className="text-success">
                            {val.numReviews} Reviews
                          </p>
                          <p className="text-success badge bg-light">
                            {val.numReviews} Reviews
                          </p>
                          <p className="text-success badge bg-light">
                            {val.numVisit} Visit
                          </p>
                          <p>
                            <button className="btn btn-primary btn-block">
                              <Link
                                to={`/detailRoom/${val._id}`}
                                className="text-light"
                              >
                                Detail
                              </Link>
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
      </main>
    </>
  );
};

export default CategoryRoom;
