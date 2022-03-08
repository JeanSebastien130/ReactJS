import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ReachMe from "./components/ReachMe";

function App() {
  return (
    <>
      <Navbar />
      <>
        <Banner />
        <AboutMe />
        <Projects />
        <ReachMe />
      </>
    </>
  );
}

export default App;
