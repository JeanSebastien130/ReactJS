import "../Stylesheet/RightSidebar.css";

const RightSidebar = () => {
  return (
    <>
      <ul className="right-sidebar-list">
        <li>About me</li>
        <li style={{ marginRight: "25px" }}>My projects</li>
        <li style={{ marginRight: "100px" }}>Reach me</li>
      </ul>
    </>
  );
};

export default RightSidebar;
