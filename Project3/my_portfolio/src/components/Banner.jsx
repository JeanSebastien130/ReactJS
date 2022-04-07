import AaronBridge from "../images/AaronBridge.jpg";
// import AaronBridge from "../images/AaronBridge.jpg";
import AaronMountain from "../images/AaronMountain.jpg";
// import AaronSmog from "../images/AaronSmog.jpg";
import "../Stylesheet/Banner.css";

const Banner = () => {
  return (
    <div className="entirecode">
      <div className="AllDetailsandbridge">
          <img className="bridgepic" src={AaronBridge} alt="img" />
        <div className="allDetails">
          <div className="name">
            <h1>Jean-Sébastien</h1>
            <h1>Morel</h1>
          </div>
          <div className="fullstack">
            <h3>Full-Stack Developer</h3>
          </div>
        </div>
      </div>
      {/* <div class="vl"></div> */}
      <img className="mountainpic" src={AaronMountain} alt="img" />
    </div>
  );
};

export default Banner;
