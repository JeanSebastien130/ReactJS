import "../Stylesheet/RightSidebar.css";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <>
      <ul className="right-sidebar-list">
        <li><Link to='/AboutMe'>About me</Link></li>
        <li style={{ marginRight: "25px" }}><Link to='MyProjects'>My projects</Link></li>
        <li style={{ marginRight: "100px" }}><Link to='ReachMe'>Reach me</Link></li>
      </ul>
    </>
  );
};

export default RightSidebar;
