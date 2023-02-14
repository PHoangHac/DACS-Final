import React, { useContext } from "react";
import { Navbar, Container, Nav, Dropdown, NavDropdown } from "react-bootstrap";
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
      await axios.get("/auth");
      dispatch({ type: "LOGOUT" });
      Navigate("/loginAdmin");
    } catch (err) {
      console.log(err);
    }
  };

  const PL = "http://localhost:7070/images/";

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link
              to={"/Admin/OverView"}
              style={{
                textDecoration: "none",
                color: "white",
                lineHeight: "40px",
              }}
            >
              Admin DashBoard
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link className="nav-link ">
              <i className="fa-solid fa-envelope text-light" id="fa-navbar">
                <span className="notification">11</span>
              </i>
            </Nav.Link>

            <Nav.Link className="nav-link me-auto">
              <i className="fa-solid fa-bell text-light" id="fa-navbar">
                <span className="notification">11</span>
              </i>
            </Nav.Link>

            {user && (
              <Navbar.Brand>
                <img
                  src={PL + user.img}
                  roundedcircle="true"
                  width="42"
                  height="42"
                  alt=""
                  id="img-user"
                />
              </Navbar.Brand>
            )}

            {user && (
              <Nav className="me-3">
                {/* <Container> */}
                <Navbar.Text className="text-light fs-5 fw-bold">
                  {user.username} <br />
                </Navbar.Text>
                {/* </Container> */}
              </Nav>
            )}
            <Nav className="">
              <NavDropdown
                title={<span id="header-link-3-1">Setting</span>}
                className="fs-5 fw-bold"
                id="collasible-nav-dropdown "
              >
                {user && (
                  <>
                    <NavDropdown.Item as={Link} to={`/forgotPass`}>
                      ChangePassword
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={`/Admin/UpdateUser/${user._id}`}
                    >
                      My Profile
                    </NavDropdown.Item>
                    <ColoredLine color="blue" />
                    <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarAdmin;
