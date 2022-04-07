import "../Stylesheet/RightSidebar.css";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <>
      <ul className="right-sidebar-list">
        <li><Link className="link" style={{ textDecoration: 'none' }} to='/AboutMe'>About me</Link></li>
        <li style={{ marginRight: "25px" }}><Link className="link" style={{ textDecoration: 'none' }} to='MyProjects'>My projects</Link></li>
        <li style={{ marginRight: "100px" }}><Link className="link" style={{ textDecoration: 'none' }} to='ReachMe'>Reach me</Link></li>
      </ul>
    </>
  );
};

export default RightSidebar;
