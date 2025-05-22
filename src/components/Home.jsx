import { Microphone, Gear } from "../assets/icons";
import Card from "./Card";
import Logo from "../assets/logo.png";
import "../App.css";

function Home() {
  return (
    <>
      <div className="home">
        <img className="home__logo" src={Logo} alt="logo" />
        <h1 className="home__h1">Series and movies</h1>
        <div className="home__icons">
          <Microphone />
          <Gear />
        </div>
      </div>
      <Card />
    </>
  );
}

export default Home;
