import "../Stylesheet/RightSidebar.css";
import { NavLink } from "react-router-dom";

const RightSidebar = () => {
  return (
    <nav>
      <ul className="right-sidebar-list">
        <li><NavLink className="link1" style={{ textDecoration: 'none', marginRight: "18px" }} to='AboutMe'>About me</NavLink></li>
        <li style={{ marginRight: "25px" }}><NavLink className="link2" style={{ textDecoration: 'none' }} to='MyProjects'>My projects</NavLink></li>
        <li style={{ marginRight: "35px" }}><NavLink className="link3" style={{ textDecoration: 'none' }} to='ReachMe'>Reach me</NavLink></li>
      </ul>
    </nav>
  );
};
//comment 

export default RightSidebar;
