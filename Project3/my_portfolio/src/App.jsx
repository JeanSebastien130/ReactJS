import React from "react";
import "./App.css";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ReachMe from "./components/ReachMe";
import Bluemarble from "./images/bluemarble.jpg";

function App() {
  return (
    <Router>
      <div
        className="backgroundimg"
        style={{ backgroundImage: `url(${Bluemarble})` }}
      >
        <div className="column-one">
          <LeftSidebar />
        </div>
        <div className="column-two">
        <Switch>
          <Route exact path="/">
            <Banner />
          </Route> 
          <Route exact path="/AboutMe">
            <AboutMe />
          </Route>
          <Route exact path="/MyProjects">
            <MyProjects />
          </Route>
          <Route exact path="/ReachMe">
            <ReachMe />
          </Route>
        </Switch> 
        </div>
        <div className="column-three">
          <RightSidebar />
        </div>
      </div> 
    </Router>
  );
}

export default App;
