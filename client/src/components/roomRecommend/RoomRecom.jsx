import React from "react";
import "./roomreco.scss";
import useFetch from "../../hooks/useFetch";

const RoomRecom = () => {
  const { data, loading } = useFetch("/room?bestChoice=true");

  return (
    <div className="container mb-5">
      <h3 className="mt-2">Recommend</h3>
      <div className="row flex-row flex-nowrap overflow-auto">
        {loading ? (
          "loading data ....."
        ) : (
          <>
            {data.map((value) => {
              return (
                <div className="col-3 " key={value._id}>
                  <div className="card">
                    <img
                      src={value.photos[0]}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.price} Triệu</p>
                      <p className="card-text">{value.area} m²</p>
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

export default RoomRecom;
