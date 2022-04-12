import '../Stylesheet/MyProject.css'
import '../Stylesheet/card_ft.css'
import '../Stylesheet/card_abb.css'
import Fasttrack from '../images/Fasttrack.png'
import Artbnb from '../images/Artbnb.png'

const myProjects = () => {
  return (
  <div className='myprojectsbanner'>  
      <h1 className='headermyprojects'>My works</h1>
    <div className='entirecodemyprojects'>
    <div class="flip-card-ft">
        <div class="flip-card-inner-ft">
          <div class="flip-card-front-ft">
            <img className='fasttrackpic' src={Fasttrack} alt="image1" />
          </div>
          <div class="flip-card-back-ft">
            <div className='flip-card-back-details-ft'>
              <h1>Fast Track</h1>
              <p style={{margin: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non porttitor risus. Aenean eu ex et sem interdum auctor. Sed vel lorem ac augue rutrum tempus. Praesent sodales congue nunc, quis tincidunt odio ullamcorper eget.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card-abb">
        <div class="flip-card-inner-abb">
          <div class="flip-card-front-abb">
            <img className='fasttrackpic' src={Artbnb} alt="image1" />
          </div>
          <div class="flip-card-back-abb">
            <div className='flip-card-back-details-abb'>
              <h1>Artbnb</h1>
              <p style={{margin: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non porttitor risus. Aenean eu ex et sem interdum auctor. Sed vel lorem ac augue rutrum tempus. Praesent sodales congue nunc, quis tincidunt odio ullamcorper eget.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default myProjects;
