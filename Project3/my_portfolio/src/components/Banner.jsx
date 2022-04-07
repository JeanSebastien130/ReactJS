import AaronTree from "../images/AaronTree.jpg";
import AaronCountryside from "../images/AaronCountryside.jpg";
// import AaronBridge from "../images/AaronBridge.jpg";
// import AaronMountain from "../images/AaronMountain.jpg";
// import AaronSmog from "../images/AaronSmog.jpg";
import "../Stylesheet/Banner.css";

const Banner = () => {
  return (
    <div className="entirecode">
      <div className="deuxdiv">
          <img className="countrysidepic" src={AaronCountryside} alt="img" />
        <div className="fullstack">
          <h2>Full-Stack Developer</h2>
        </div>
      </div>
      <div className="barre"></div>
      <div className="deuxdiv">
        <div className="alldetails">
            <h1>Jean-Sébastien</h1>
            <h1>Morel</h1>
        </div>
        <img className="treepic" src={AaronTree} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
