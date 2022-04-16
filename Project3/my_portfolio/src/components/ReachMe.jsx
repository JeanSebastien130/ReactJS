import '../Stylesheet/ReachMe.css'

const ReachMe = () => {
  return (
  <div className="reachmeentirecode">
    <div className='thewholeform'>
      <div className='details'>
        <label for="firstName">First name</label>
        <input type="text" name="firstName" className="firstName" tabIndex="1"/>
        <label for="lastName">Last name</label>
        <input type="text" name="lastName" className="lastName" tabIndex="2"/>
      </div>
      <div className='mailadress'>
        <label for="Mail adress">Your mail address</label>
        <input type="text" name="mail" className="lastName" tabIndex="2"/>
      </div>
      <div className='subject'>
        <label for="Subject">Subject</label>
        <input type="text" name="Subject" className="lastName" tabIndex="2"/>
      </div>
      <div className='message'>
        <label for="Your message">Your message</label>
        <input type="text" name="lastName" className="lastName" tabIndex="2"/>
      </div>
      <button type='submit'>Submit</button>
    </div>
  </div>
  );
};

export default ReachMe;
