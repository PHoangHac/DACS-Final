import React from "react";
import "./roomreco.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import moment from "moment";

const RoomRecom2 = () => {
  const { data, loading } = useFetch("/room?bestChoice=true");

  const PL = "http://localhost:7070/images/";

  return (
    <div className="container mb-5">
      <h3 className="mt-2 badge bg-primary text-wrap fs-4">Recommend</h3>
      <div className="row flex-row flex-nowrap overflow-auto">
        {loading ? (
          "loading data ....."
        ) : (
          <>
            {data.map((value) => {
              return (
                <div
                  className="col-12 col-sm-8 col-md-6 col-lg-4"
                  key={value._id}
                >
                  <div className="card">
                    <img
                      className="card-img"
                      src={PL + value.photos[0]}
                      alt="Bologna"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{value.title}</h4>
                      <small className="text-muted cat">
                        <i className="fa text-info fa-area-chart"></i>{" "}
                        {value.area} m²
                        <i className="fas fa-users text-info ms-3"></i>{" "}
                        {value.maxPeople} Người
                        <i className="fa-solid text-info fa-sack-dollar ms-3"></i>{" "}
                        {value.price} Triệu
                      </small>
                      <br />
                      <Link
                        to={`/detailRoom/${value._id}`}
                        className="btn btn-info mt-3"
                      >
                        View
                      </Link>
                    </div>
                    <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                      <div className="views">
                        {moment(value.createdAt).startOf("hour").fromNow()}
                      </div>
                      <div className="stats">
                        <i className="far fa-eye"></i> 1347
                        <i className="far fa-comment ms-3"></i> 12
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default RoomRecom2;
