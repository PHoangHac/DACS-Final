import React from "react";
import useFetch from "../../hooks/useFetch";

const RoomList = () => {
  const { data, loading } = useFetch("/room");

  return (
    <div className="card mb-3 mt-3" style={{ maxwidth: "540px" }}>
      {loading ? (
        "loading data ...."
      ) : (
        <>
          {data.map((value) => {
            return (
              <div
                className="row g-0 shadow-lg p-3 mb-5 bg-white rounded"
                key={value._id}
              >
                <div className="col-md-4">
                  <img
                    src={value.photos[0]}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.desc}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default RoomList;
