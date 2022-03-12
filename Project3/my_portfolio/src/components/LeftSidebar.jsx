import "../Stylesheet/LeftSidebar.css";
import LinkedIn from "../images/LinkedIn.png";
import Github from "../images/github.png";

const LeftSidebar = () => {
  return (
    <>
      <ul className="left-sidebar-list">
        <li style={{ marginLeft: "35px" }}>Scroll for more</li>
        <div className="Links">
          <li>
            <a href="https://www.linkedin.com/in/jsmorel/">
              <img
                src={LinkedIn}
                className="Linkedinpic"
                alt="Linkedinlink"
              ></img>
            </a>
          </li>
          <a href="https://github.com/JeanSebastien130">
            <img src={Github} className="Githubpic" alt="GithubLink"></img>
          </a>
          <li></li>
        </div>
      </ul>
    </>
  );
};

export default LeftSidebar;
