/* eslint-disable no-unused-vars */
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/img/Favicon.png";
import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../style/navbar.css";
import axios from "./blog/axiosConfig";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoggedInStatus = async () => {
    await axios
      .post("/logInStatus")
      .then((response) => {
        console.log(response);
        if (response.data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleLogout = async () => {
    await axios
      .post("/logout")
      .then((response) => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  return (
    <Navbar expand="lg" className="navbar-container">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              activeclassname="active"
              className="nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/service"
              activeclassname="active"
              className="nav-link"
            >
              Service
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/blog"
              activeclassname="active"
              className="nav-link"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              activeclassname="active"
              className="nav-link"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              activeclassname="active"
              className="nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/property"
              activeclassname="active"
              className="nav-link"
            >
              Property Listing
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              activeclassname="active"
              className={`nav-link ${isLoggedIn ? "d-none" : ""}`}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/"
              activeclassname="active"
              className={`nav-link ${isLoggedIn ? "" : "d-none"}`}
              onClick={handleLogout}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
