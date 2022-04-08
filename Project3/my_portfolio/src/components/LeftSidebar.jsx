import "../Stylesheet/LeftSidebar.css";
import LinkedIn from "../images/linkedinlogoblack.png";
import Github from "../images/github.png";
import TemporaryLogo from "../images/temporarylogo.png"
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <>
      <ul className="left-sidebar-list">
        <li style={{ marginLeft: "68px", marginTop: "10px" }}>
          Scroll for more
        </li>
        {/* <div className="Links"> */}
        <li style={{ marginRight: "20px" }}>
          <a href="https://www.linkedin.com/in/jsmorel/" target="_blank" rel="noreferrer">
            <img
              src={LinkedIn}
              className="Linkedinpic"
              alt="Linkedinlink"
            ></img>
            <a href="https://github.com/JeanSebastien130" target="_blank" rel="noreferrer">
              <img src={Github} className="Githubpic" alt="GithubLink" ></img>
            </a>
          </a>
        </li>
        <nav>
          <li style={{ marginLeft: "68px", marginTop: "10px" }}>
            <NavLink className="link" style={{ textDecoration: 'none' }} to='/'><img className="mainlogo" src={TemporaryLogo} alt=""/></NavLink>
          </li>
        </nav>
      </ul>
    </>
  );
};

export default LeftSidebar;
