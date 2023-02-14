import { Link } from "react-router-dom";
import "./NavBar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo1 from "../../images/home/Logo-2-orange.png";
import CartWidget from "../main/Cart/CartWidget/CartWidget.js";

const NavBar = () => {
  return (
    <Navbar className="header sticky-top" expand="lg">
      <Container>
        <Link to={`/`}>
          <Navbar.Brand>
            <img src={logo1} className="logo1" alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/`} className="nav-item">
              Home
            </Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={`/products`} className="categories">
                  All
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/products/coffeemaker`} className="categories">
                  Coffee Maker
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/products/accessories`} className="categories">
                  Accessories
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/products/coffee`} className="categories">
                  Coffee
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to={`/contact`} className="nav-item">
              Contact
            </Link>
            <Link to={`/cart`} className="nav-item">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
