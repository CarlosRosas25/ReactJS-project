import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Home from "./components/main/Home/Home.js";
import ProductsContainer from "./components/main/Products/ProductsContainer.js";
import ProductDetail from "./components/main/Products/ProductDetail/ProductDetail.js";
import CategoryContainer from "./components/main/Products/ProductCategory/CategoryContainer.js";
import Footer from "./components/footer/Footer.js";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home greeting="Hello world!!!!" />} />
          <Route exact path="/products" element={<ProductsContainer />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route exact path="/category/:categoryId" element={<CategoryContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
