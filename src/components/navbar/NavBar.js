import { Link } from "react-router-dom";
import "./NavBar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo1 from "../../images/home/Logo-2-orange.png";
import CartWidget from "../main/Cart/CartWidget/CartWidget.js";

const NavBar = () => {
  return (
    <Navbar className="header sticky-top" expand="lg">
      <Container>
        <Link to={`/`}>
          <Navbar.Brand href="#home">
            <img src={logo1} className="logo1" alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/`} className="nav-item">
              Home
            </Link>
            <Link to={`/products`} className="nav-item">
              Products
            </Link>
            <Link to={`/products/accessories`} className="nav-item">
              Accessories
            </Link>
            <Link to={`/products/coffee`} className="nav-item">
              Coffee
            </Link>
            <Link className="nav-item" href="#contact">
              Contact
            </Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
