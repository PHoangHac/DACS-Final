import React from "react";
import "./category.scss";
import useFetch from "../../hooks/useFetch";

import { Link } from "react-router-dom";

const Category = () => {
  const { data, loading } = useFetch("/category");

  const PL = "http://localhost:7070/images/";

  return (
    <div className="container mt-5 mb-5">
      <h3 className="mt-2 badge bg-primary text-wrap fs-4">Category</h3>

      <div className="row flex-row flex-nowrap overflow-auto">
        {loading ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {data.map((value, index) => {
              return (
                <div className="col-3" key={value._id}>
                  <div className="card">
                    <Link to={`/categories/${value._id}`}>
                      <img
                        src={PL + value.img}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">{value.type}</p>
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

export default Category;
