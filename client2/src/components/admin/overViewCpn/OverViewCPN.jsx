import React, { useState, useEffect } from "react";
// import useFetch from "../../../hooks/useFetch";
import axios from "axios";

const OverViewCPN = () => {
  //   const { data } = useFetch(`/room`);

  const [numPost, setNumPost] = useState([]);
  const [numUser, setNumUser] = useState([]);
  const [numCategory, setNumCategory] = useState([]);

  const NumPost = async () => {
    axios.get("/room").then((res) => {
      setNumPost(res.data);
    });
  };

  const NumUser = async () => {
    axios.get("/user").then((res) => {
      setNumUser(res.data);
    });
  };

  const NumCategory = async () => {
    axios.get("/category").then((res) => {
      setNumCategory(res.data);
    });
  };

  console.log(numPost);
  //   console.log(numUser);
  //   console.log(numCategory);

  useEffect(() => {
    NumPost();
    NumUser();
    NumCategory();
    // updateVisitCount();
  }, []);

  //   console.log(numUser.length);

  // const countEL = document.getElementById("count");

  // updateVisitCount();

  // function updateVisitCount() {
  //   fetch(`https://api.countapi.xyz/update/hoang-hac/youtube/?amount=1`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       countEL.innerHTML = res.value;
  //     });
  // }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col" style={{ width: "18rem" }}>
          <div className="card text-dark bg-light mb-3 ">
            <div className="card-header fw-bold text-light bg-success">
              All Posts in website
            </div>
            <div className="card-body">
              <h5 className="card-title badge bg-primary text-wrap fs-6">
                {numPost.length} Post
              </h5>
            </div>
          </div>
        </div>
        <div className="col" style={{ width: "18rem" }}>
          <div className="card text-dark bg-light mb-3">
            <div className="card-header fw-bold text-light bg-success">
              Number of user
            </div>
            <div className="card-body">
              <h5 className="card-title badge bg-primary text-wrap fs-6">
                {numUser.length} User
              </h5>
            </div>
          </div>
        </div>
        <div className="col" style={{ width: "18rem" }}>
          <div className="card text-dark bg-light ss mb-3">
            <div className="card-header fw-bold text-light bg-success">
              Number of category
            </div>
            <div className="card-body">
              <h5 className="card-title badge bg-primary text-wrap fs-6">
                {numCategory.length} Category
              </h5>
            </div>
          </div>
        </div>
        <div className="col" style={{ width: "18rem" }} hidden>
          <div className="card text-dark bg-light ss mb-3">
            <div className="card-header fw-bold text-light bg-success">
              Number of viewer
            </div>
            <div className="card-body">
              <h5
                className="card-title badge bg-primary text-wrap fs-6"
                id="count"
              >
                Viewer
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverViewCPN;
