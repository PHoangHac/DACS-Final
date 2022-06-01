import React from "react";
import logo from "../../assets/img/logo.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

//import components bootstrap 5
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const Header = () => {
  const Navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get("auth/logout");
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
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Found Rooms
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/rooms"}>
                Rooms
              </Nav.Link>
              <Nav.Link href="#pricing">Contacts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {!user && (
              <Nav>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
              </Nav>
            )}
            {user && (
              <Nav className="me-3">
                {/* <Container> */}
                <Navbar.Text className="text-info">
                  Welcome ! {user.username}
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
