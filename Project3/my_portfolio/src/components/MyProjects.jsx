import '../Stylesheet/MyProject.css'
import Fasttrack from '../images/Fasttrack.png'
import Artbnb from '../images/Artbnb.png'

const myProjects = () => {
  return (
  <div className='myprojectsbanner'>  
    <div className='entirecodemyprojects'>
      <h1>My works</h1>
      <div className="theworks">
        <img className='fasttrackpic' src={Fasttrack} alt="image1" />
        <img className='artbnbpic' src={Artbnb} alt="image2" />
      </div>
    </div>
  </div>
  );
};

export default myProjects;
