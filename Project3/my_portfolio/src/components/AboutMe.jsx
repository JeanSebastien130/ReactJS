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
        <h1><strong>To make your idea an operational product</strong></h1>
        <h2>from scratch to a final operational product </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper et purus id cursus. Vestibulum varius consectetur mauris a aliquam. Curabitur vel justo pretium, faucibus quam quis, congue lacus. Vivamus tristique ipsum sed libero tristique iaculis. Nulla sollicitudin metus ante, eu maximus mauris pretium quis. Morbi eu molestie ante. Nullam lobortis, mi in sodales vulputate, diam ligula molestie eros, et suscipit lorem nisl et metus. Cras vel magna nec lectus efficitur feugiat quis ut enim.</p>
      </div>
    </div>
    );
};

export default AboutMe;
