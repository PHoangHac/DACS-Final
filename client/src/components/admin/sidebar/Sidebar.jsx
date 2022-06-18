import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaHome,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../adminDashBoard.scss";
import { Outlet } from "react-router-dom";
import logo from "../../../assets/img/icons8-bbb.svg";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Admin",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Admin/User",
      name: "Users",
      icon: <FaUserAlt />,
    },
    {
      path: "/Admin/Category",
      name: "Categories",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Admin/Room",
      name: "Rooms",
      icon: <FaCommentAlt />,
    },
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
  ];
  return (
    <div className="container container-sidebar" style={{ height: "130vh" }}>
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="sidebar sidebar-side"
      >
        <div className="top_section top_section-sidebar">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo logo-sidebar"
          >
            <img src={logo} alt="Logo" width="60" height="60" />
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="bars bars-sidebar"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link link-sidebar"
            activeclassname="active active-sidebar"
          >
            <div className="icon icon-sidebar">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text link_text-sidebar"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="main-sidebar">
        {children}
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
