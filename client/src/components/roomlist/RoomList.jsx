import React, { useState } from "react";
// import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Rating from "./Rating";
import axios from "axios";
// import { AuthContext } from "../../contexts/AuthContext";

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

  // console.log(list);

  // const { user } = useContext(AuthContext);

  // const LikePost = async (id) => {
  //   try {
  //     await axios.put(`/room/like`, {
  //       body: JSON.stringify({
  //         postid: id,
  //         like: user._id,
  //       }),
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const UnLikePost = async (id) => {
  //   try {
  //     await axios.put(`/room/Unlike/${id}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const CountVistPost = async (id) => {
    try {
      await axios.put(`/room/CountPostVisit/${id}`, {
        numVisit: 1,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {list !== undefined && list.length > 0 ? (
        list.slice(pagesVisited, pagesVisited + RoomsPerPage).map((val) => {
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
                    <Rating value={val.rating} />
                    <p> {val.desc} </p>
                  </div>
                </div>
                <aside className="col-sm-3">
                  <div className="info-aside mt-3">
                    <div className="price-wrap">
                      <span className="price h5"> {val.price} Triệu </span>
                    </div>
                    <p className="text-success fw-bold mt-2 ">{val.status}</p>
                    <p className="text-success badge bg-light">
                      {val.numReviews} Reviews
                    </p>
                    <p className="text-success badge bg-light">
                      {val.numVisit} Visit
                    </p>
                    <p>
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          CountVistPost(val._id);
                        }}
                      >
                        <Link
                          to={`/detailRoom/${val._id}`}
                          className="text-light"
                        >
                          Detail
                        </Link>
                      </button>
                      <br />

                      {/* {val.like?.includes(user._id) ? (
                        <i
                          className="fa-solid fa-thumbs-down"
                          onClick={() => {
                            UnLikePost(val._id);
                          }}
                        ></i>
                      ) : (
                        <i
                          className="fa-solid fa-thumbs-up"
                          onClick={() => {
                            LikePost(val._id);
                          }}
                        ></i>
                      )}

                      <span className="text">{val.like?.length} like</span> */}
                    </p>
                  </div>
                </aside>
              </div>
            </article>
          );
        })
      ) : (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
    </>
  );
};

export default RoomList;
