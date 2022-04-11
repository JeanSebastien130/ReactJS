import ProfilePic from "../images/Profile.jpeg"
import "../Stylesheet/AboutMe.css"

const AboutMe = () => {
  return(
    <div className="aboutmebanner">
      <div>
        <img className='profilepic' src={ProfilePic} alt="ProfilePic" />
      </div>
      <div className="barreaboutme"></div>
      <div className="alldetailsaboutme">
        <h1><strong>Let me picture your idea and make of your idea an operational product</strong></h1>
        <p style={{ fontSize: "20px" }}>Always available to talk about technology, I am passionated about web development and I decided to make it my job. From the backend foundations to the frontend design, I have a keen eye for every aspect of a website. All the knowledge of web development I get from coffee all day long and the love of cats.</p>
      </div>
    </div>
    );
};

export default AboutMe;
