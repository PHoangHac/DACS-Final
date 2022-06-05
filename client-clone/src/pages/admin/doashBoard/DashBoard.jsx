import React from "react";
import NavBarAdmin from "../../../components/admin/navbar/NavBarAdmin";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
// import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <NavBarAdmin />
      <Sidebar />
      {/* <Outlet /> */}
    </>
  );
};

export default DashBoard;
