import React from "react";
import "./App.css";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ReachMe from "./components/ReachMe";
import Bluemarble from "./images/bluemarble.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route exact path="/" component={Banner}/>
          <Route exact path="/AboutMe" component={AboutMe}/>
          <Route exact path="/MyProjects" component={MyProjects}/>
          <Route exact path="/ReachMe" component={ReachMe}/>     
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
