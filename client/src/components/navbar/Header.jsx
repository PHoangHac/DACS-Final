import React from "react";
import logo from "../../assets/img/icons8-bbb.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./header.scss";

//import components bootstrap 5
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);

  const Navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/auth");
      dispatch({ type: "LOGOUT" });
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const PL = "http://localhost:7070/images/";

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "white",
                lineHeight: "40px",
              }}
            >
              <img
                alt=""
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{" "}
              Group 9
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="fs-5 fw-bold"
                id="header-link"
                as={Link}
                to={"/rooms"}
              >
                Posts
              </Nav.Link>
              <Nav.Link
                className="fs-5 fw-bold"
                id="header-link"
                as={Link}
                to={"/contacts"}
              >
                Contacts
              </Nav.Link>
              <NavDropdown
                title={<span id="header-link-3">Setting</span>}
                className="fs-5 fw-bold"
                id="collasible-nav-dropdown "
              >
                <NavDropdown.Item as={Link} to={`/Createpost/${user?._id}`}>
                  New Post
                </NavDropdown.Item>
                {user && (
                  <>
                    <NavDropdown.Item as={Link} to={`/MyPost/${user?._id}`}>
                      My Post
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={`/forgotPass`}>
                      ChangePassword
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={`/profiles/${user?._id}`}>
                      Profile
                    </NavDropdown.Item>
                  </>
                )}
                <NavDropdown.Divider />
                {user?.isAdmin && (
                  <NavDropdown.Item>
                    <Link to={"/Admin/OverView"}>Admin Pages</Link>
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>

            {!user && (
              <Nav>
                <Nav.Link
                  className="fs-5 fw-bold"
                  id="header-link"
                  as={Link}
                  to={"/login"}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  className="fs-5 fw-bold"
                  id="header-link"
                  as={Link}
                  to={"/register"}
                >
                  Sign Up
                </Nav.Link>
              </Nav>
            )}

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
                <Navbar.Text className="text-info fs-5 fw-bold">
                  {user.username} <br />
                </Navbar.Text>
                {/* </Container> */}
              </Nav>
            )}

            {user && (
              <Button className="fw-bold" onClick={handleClick}>
                Logout
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
