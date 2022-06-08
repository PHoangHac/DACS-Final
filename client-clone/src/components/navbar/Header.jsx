import React from "react";
import logo from "../../assets/img/logo.svg";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

//import components bootstrap 5
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const Header = () => {
  // const Navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // await axios.get("auth/logout");
      dispatch({ type: "LOGOUT" });
      // Navigate("/");
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
              Group 9
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/rooms"}>
                Phòng
              </Nav.Link>
              <Nav.Link as={Link} to={"/contacts"}>
                Liên hệ
              </Nav.Link>
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
                  Đăng nhập
                </Nav.Link>
                <Nav.Link as={Link} to={"/register"}>
                  Đăng ký
                </Nav.Link>
              </Nav>
            )}

            {user && (
              <Nav className="me-3">
                {/* <Container> */}
                <Navbar.Text className="text-info">
                  Chào mừng ! {user.username} <br />
                </Navbar.Text>
                {/* </Container> */}
              </Nav>
            )}

            {user && <Button onClick={handleClick}>Đăng xuất</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
