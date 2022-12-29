import "./NavBar.scss";
import logo1 from "../../images/home/Logo-2-orange.png";
import cart from "../../images/home/cart.svg";

const NavBar = () => {
  return (
    <header class="navbar navbar-expand-lg navbar-custom navbar-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img class="logo1" src={logo1} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img class="cartIcon" src={cart} alt="cart" />
                <span class="numOfItems">3</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
