import '../Stylesheet/MyProject.css'
import Fasttrack from '../images/Fasttrack.png'
// import Artbnb from '../images/Artbnb.png'

const myProjects = () => {
  return (
  <div className='myprojectsbanner'>  
      <h1 className='headermyprojects'>My works</h1>
    <div className='entirecodemyprojects'>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img className='fasttrackpic' src={Fasttrack} alt="image1" />
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default myProjects;
