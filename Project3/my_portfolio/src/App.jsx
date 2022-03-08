import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ReachMe from "./components/ReachMe";
import Bluemarble from "./images/bluemarble.jpg";
import "./App.css";
import "./Stylesheet/RightSidebar.css";
import React from "react";

function App() {
  return (
    <div
      className="backgroundimg"
      style={{ backgroundImage: `url(${Bluemarble})` }}
    >
      <div className="grid-one">
        <LeftSidebar />
      </div>
      <div className="grid">
        <div className="grid-two">
          <Banner />
          <AboutMe />
          <Projects />
          <ReachMe />
        </div>
      </div>
      <div className="column-three">
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
