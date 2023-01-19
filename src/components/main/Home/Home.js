import "./Home.scss";

const Home = (props) => {
  return (
    <div>
      <div className="greeting">{props.greeting}</div>
    </div>
  );
};

export default Home;
