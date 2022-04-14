import '../Stylesheet/ReachMe.css'

const ReachMe = () => {
  return (
  <div className="reachmeentirecode">
    <div className='thewholeform'>
      <label for="firstName">First name</label>
      <input type="text" name="firstName" className="firstName" tabIndex="1"/>
      <label for="lastName">Last name</label>
      <input type="text" name="lastName" className="lastName" tabIndex="2"/>
      <label for="lastName">Your mail address</label>
      <input type="text" name="lastName" className="lastName" tabIndex="2"/>
      <label for="lastName">Your message</label>
      <input type="text" name="lastName" className="lastName" tabIndex="2"/>
    </div>
  </div>
  );
};

export default ReachMe;
