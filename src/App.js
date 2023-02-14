import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Home from "./components/main/Home/Home.js";
import ProductsContainer from "./components/main/Products/ProductsContainer.js";
import ProductDetail from "./components/main/Products/ProductDetail/ProductDetail.js";
import CartContainer from "./components/main/Cart/CartContainer/CartContainer.js";
import Footer from "./components/footer/Footer.js";
import Contact from "./components/main/Contact/Contact.js";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductsContainer />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route
            exact
            path="/products/:productCategory"
            element={<ProductsContainer />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<CartContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
