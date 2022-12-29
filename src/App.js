import NavBar from "./components/navbar/NavBar.js";
import ItemListContainer from "./components/main/ItemListContainer.js";
import Footer from "./components/footer/Footer.js";
import "./App.scss";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hello world!!!!" />
      <Footer />
    </div>
  );
};

export default App;
