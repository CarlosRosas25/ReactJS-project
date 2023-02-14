import "./Home.scss";
import Carousel from "react-bootstrap/Carousel";
import coffeeCup from "../../../images/home/cup-of-coffee.jpg";
import coffeeBeans from "../../../images/home/coffee-beans.jpg";
import coffeeAccessories from "../../../images/home/coffee-accesories.jpg";

const Home = (props) => {
  return (
    <Carousel>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100 image-height"
          src={coffeeCup}
          alt="Cup of coffee"
        />
        <Carousel.Caption>
          <h3>Coffee forever</h3>
          <p>The best way to start your day is with a cup of coffee.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100 image-height"
          src={coffeeBeans}
          alt="Coffee beans"
        />
        <Carousel.Caption>
          <h3>Gourmet coffee</h3>
          <p>We offer you the best brands of specialty coffee.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100 image-height"
          src={coffeeAccessories}
          alt="Coffee set-up"
        />
        <Carousel.Caption>
          <h3>Ideal coffee setup</h3>
          <p>Find all the accesories you need to make great coffee at home.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
