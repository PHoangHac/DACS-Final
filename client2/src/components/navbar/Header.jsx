import React from "react";
import logo from "../../assets/img/icons8-bbb.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

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
              <Nav.Link className=" fs-5" as={Link} to={"/rooms"}>
                Rooms
              </Nav.Link>
              <Nav.Link className=" fs-5" as={Link} to={"/contacts"}>
                Contacts
              </Nav.Link>
              <NavDropdown
                title="Setting"
                className=" fs-5"
                id="collasible-nav-dropdown"
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
                    <Link to={"/Admin"}>Admin Pages</Link>
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>

            {!user && (
              <Nav>
                <Nav.Link className=" fs-5" as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link className=" fs-5" as={Link} to={"/register"}>
                  Sign Up
                </Nav.Link>
              </Nav>
            )}

            {user && (
              <Nav className="me-3">
                {/* <Container> */}
                <Navbar.Text className="text-info fs-5">
                  Welcome ! {user.username} <br />
                </Navbar.Text>
                {/* </Container> */}
              </Nav>
            )}

            {user && <Button onClick={handleClick}>Logout</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
