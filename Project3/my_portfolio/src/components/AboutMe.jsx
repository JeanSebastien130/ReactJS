import ProfilePic from "../images/Profile.jpeg"
import "../Stylesheet/AboutMe.css"

const AboutMe = () => {
  return(
    <div className="aboutmebanner">
      <div>
        <img className='profilepic' src={ProfilePic} alt="ProfilePic" />
      </div>
      <div>
        <h1>Let me picture your idea and make them come true</h1>
        <h2>From zero to a final operational product </h2>
        <p></p>
      </div>
    </div>
    );
};

export default AboutMe;
