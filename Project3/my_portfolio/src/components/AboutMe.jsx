import ProfilePic from "../images/Profile.jpeg"
import "../Stylesheet/AboutMe.css"

const AboutMe = () => {
  return(
    <div className="entirecodeaboutme">
      <div>
        <img className='profilepic' src={ProfilePic} alt="ProfilePic" />
      </div>
    </div>
    );
};

export default AboutMe;
