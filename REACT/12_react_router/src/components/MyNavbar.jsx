import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo.png"     
import { Link, NavLink } from "react-router-dom";
//! Resmi kullanmadan önce import ediyoruz. 
//! Resme tikladigimda Home Page e gitmesini istedigim icin img elementini Link tag i icersinde kullaniyorum.
//! harici sayfa icin <a> element  dahili sayfalar icin <NavLink> ve <Link>
//! ANLAMADIMMMM Nav in className ini ms-auto yapinca linklerin hepsi saga yaslandi

function NavScrollExample() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/">
          <img alt="" src={logo} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link rounded-2"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive && "underline",
                  backgroundColor: isActive && "#E6E6FA",
                };
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link rounded-2"
              style={({ isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive && "underline",
                  backgroundColor: isActive && "#E6E6FA",
                };
              }}
              to="/teacher"
            >
              Teacher
            </NavLink>
            <NavLink
              className="nav-link rounded-2"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive && "underline",
                  backgroundColor: isActive && "#E6E6FA",
                };
              }}
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              className="nav-link rounded-2"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive && "underline",
                  backgroundColor: isActive && "#E6E6FA",
                };
              }}
              to="/contact"
            >
              Contact
            </NavLink>
            <a
              href="https://github.com/Yunusplt"
              target="_blank"
              className="nav-link"
              rel="noreferrer" //! hangi siteden geldigimizi saklar.
              title="go to github"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
