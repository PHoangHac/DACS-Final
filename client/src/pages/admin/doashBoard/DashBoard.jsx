import React from "react";
import NavBarAdmin from "../../../components/admin/navbar/NavBarAdmin";
import Sidebar from "../../../components/admin/sidebar/Sidebar";

// import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <NavBarAdmin />
      {/* <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div> */}
      <Sidebar />
      {/* <Outlet /> */}
    </>
  );
};

export default DashBoard;
