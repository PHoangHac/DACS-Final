import React from "react";
import "./category.scss";
import useFetch from "../../hooks/useFetch";

import { Link } from "react-router-dom";

const Category = () => {
  const { data, loading } = useFetch("/category");

  return (
    <div className="container mt-5 mb-5">
      <h3 className="mt-2 badge bg-primary text-wrap fs-4">Category</h3>
      <div className="row flex-row flex-nowrap overflow-auto">
        {loading ? (
          "loading data ....."
        ) : (
          <>
            {data.map((value, index) => {
              return (
                <div className="col-3" key={value._id}>
                  <div className="card">
                    <Link to={`/category/AllRoom/${value._id}`}>
                      <img src={value.img} className="card-img-top" alt="..." />
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
