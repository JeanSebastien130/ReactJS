import AaronBeach from "../images/AaronBeach.jpg";
import AaronBridge from "../images/AaronBridge.jpg";
import "../Stylesheet/Banner.css";

const Banner = () => {
  return (
    <div>
      <h1>Jean-Sébastien</h1>
      <h1>Morel</h1>
      <h3>Full-Stack Developer</h3>
      <img className="beachpic" src={AaronBeach} alt="img" />
      <img className="bridgepic" src={AaronBridge} alt="img" />
    </div>
  );
};

export default Banner;
