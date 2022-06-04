import React from "react";
import NavBarAdmin from "../../components/admin/NavBarAdmin";
import Sidebar from "../../components/admin/Sidebar";
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
