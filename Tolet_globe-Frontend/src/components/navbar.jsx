// import { Link, useLocation } from "react-router-dom";
// import Logo from "../assets/img/Favicon.png";
// import { useState, useEffect } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import "../style/navbar.css";
// import axios from "./blog/axiosConfig";
// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const location = useLocation();

//   const handleNavLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const checkLoggedInStatus = async () => {
//     await axios
//       .post("/logInStatus")
//       .then((response) => {
//         if (response.data.isLoggedIn) {
//           setIsLoggedIn(true);
//         } else {
//           setIsLoggedIn(false);
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const handleLogout = async () => {
//     await axios
//       .post("/logout")
//       .then((response) => {
//         setIsLoggedIn(false);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   useEffect(() => {
//     checkLoggedInStatus();
//     // const path = location.pathname.substring(1) || "home";
//     // setActiveLink(path);

//     //   }, [location.pathname]);
//   });

//   return (
//     <Navbar expand="lg" className="navbar-container">
//       <div className="container-fluid">
//         <Link to="/" className="navbar-brand">
//           <img src={Logo} alt="Logo" />
//         </Link>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           style={{ color: "white" }}
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link
//               as={Link}
//               to="/"
//               className={`nav-link ${activeLink === "home" ? "active" : ""}`}
//               onClick={() => handleNavLinkClick("home")}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/service"
//               className={`nav-link ${activeLink === "service" ? "active" : ""}`}
//               onClick={() => handleNavLinkClick("service")}
//             >
//               Service
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/blog"
//               className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
//               onClick={() => handleNavLinkClick("blog")}
//             >
//               Blog
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/contact"
//               className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
//               onClick={() => handleNavLinkClick("contact")}
//             >
//               Contact
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/about"
//               className={`nav-link ${activeLink === "about" ? "active" : ""}`}
//               onClick={() => handleNavLinkClick("about")}
//             >
//               About
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/property"
//               className={`nav-link ${
//                 activeLink === "propertyListing" ? "active" : ""
//               }`}
//               onClick={() => handleNavLinkClick("propertyListing")}
//             >
//               Property Listing
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/login"
//               className={`nav-link ${activeLink === "login" ? "active" : ""} ${
//                 isLoggedIn ? "d-none" : ""
//               }`}
//               onClick={() => handleNavLinkClick("login")}
//             >
//               Login
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/login"
//               className={`nav-link ${activeLink === "login" ? "active" : ""} ${
//                 isLoggedIn ? "" : "d-none"
//               }`}
//               onClick={handleLogout}
//             >
//               Logout
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// };

// export default NavBar;

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
        if (response.data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error actions, e.g., show error message
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
              exact
              activeClassName="active"
              className="nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/service"
              activeClassName="active"
              className="nav-link"
            >
              Service
            </Nav.Link>
            <Nav.Link

              as={NavLink}
              to="/blog"
              activeClassName="active"
              className="nav-link"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              activeClassName="active"
              className="nav-link"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              activeClassName="active"
              className="nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/property"
              activeClassName="active"
              className="nav-link"
            >
              Property Listing
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              activeClassName="active"
              className={`nav-link ${isLoggedIn ? "d-none" : ""}`}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/"
              activeClassName="active"
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
