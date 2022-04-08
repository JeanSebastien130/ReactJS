import "../Stylesheet/RightSidebar.css";
import { NavLink } from "react-router-dom";

const RightSidebar = () => {
  return (
    <nav>
      <ul className="right-sidebar-list">
        <li><NavLink className="link" style={{ textDecoration: 'none' }} to='/AboutMe'>About me</NavLink></li>
        <li style={{ marginRight: "25px" }}><NavLink className="link" style={{ textDecoration: 'none' }} to='MyProjects'>My projects</NavLink></li>
        <li style={{ marginRight: "100px" }}><NavLink className="link" style={{ textDecoration: 'none' }} to='ReachMe'>Reach me</NavLink></li>
      </ul>
    </nav>
  );
};

export default RightSidebar;
