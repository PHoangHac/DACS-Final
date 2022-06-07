import React, { useContext } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../navbar.css";
import { AuthContext } from "../../../contexts/AuthContext";
import axios from "axios";

const NavBarAdmin = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1.5,
      }}
    />
  );

  const Navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // await axios.get("auth/logout");
      dispatch({ type: "LOGOUT" });
      Navigate("/loginAdmin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand aria-disabled>Admin DashBoard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/Admin"}>
              <i className="fa-solid fa-house"></i>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link">
              <i className="fa-solid fa-envelope" id="fa-navbar">
                <span className="notification">11</span>
              </i>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link">
              <i className="fa-solid fa-bell" id="fa-navbar">
                <span className="notification">11</span>
              </i>
            </Nav.Link>
          </Nav>
          <Nav style={{ marginLeft: "30px" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/345/345736.png"
                  roundedcircle="true"
                  style={{ width: "40px", marginRight: "10px" }}
                  alt="Admin Img"
                />
                Welcome Admin ! {user.username}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item as={Link} to={`/Admin/UpdateUser/${user._id}`}>
                  My Profile
                </Dropdown.Item>
                <ColoredLine color="blue" />
                <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarAdmin;
