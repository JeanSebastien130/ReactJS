import '../Stylesheet/MyProject.css'
import '../Stylesheet/card_ft.css'
import '../Stylesheet/card_abb.css'
import Fasttrack from '../images/Fasttrack.png'
import Artbnb from '../images/Artbnb.png'
import JavaScriptLogo from '../images/JavaScript_logo.png'
import RubyOnRailsLogo from '../images/RubyOnRails.png'
import FigmaLogo from '../images/figma.png'
import PostgresSQLLogo from '../images/postgres.png'
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
            <div className='background-reverse-ft'>
              <div className='flip-card-back-details-ft'>
                <h1>Fast Track</h1>
                <p style={{margin: "20px"}}>Creation of a portfolio of stocks. Implementation of a dashboard with graphics, RestAPI's of stocks, news. From the modeling of the database to the deployment of an operational final product.</p>
                <div className='thelogos'>
                  <img className='RoRLogo' src={RubyOnRailsLogo} alt="RoRLogo" />
                  <img className='JSLogo' src={JavaScriptLogo} alt="JSLogo" />
                  <img className='FigmaLogo' src={FigmaLogo} alt="FigmaLogo" />
                  <img className='PostgresSQLLogo' src={PostgresSQLLogo} alt="PostgresSQLLogo" />
                </div>
              </div>
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
            <div className='background-reverse-abb'>
              <div className='flip-card-back-details-abb'>
                <h1>Artbnb</h1>
                <p style={{margin: "30px"}}>Project realized that aims to create a clone of AirBnB. From the modeling of the database to the deployment of the website with Heroku and an adapted domain name.</p>
                <div className='thelogos'>
                  <img className='RoRLogo' src={RubyOnRailsLogo} alt="RoRLogo" />
                  <img className='FigmaLogo' src={FigmaLogo} alt="FigmaLogo" />
                  <img className='PostgresSQLLogo' src={PostgresSQLLogo} alt="PostgresSQLLogo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default myProjects;
