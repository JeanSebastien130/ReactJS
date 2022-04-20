import '../Stylesheet/ReachMe.css'

const ReachMe = () => {
  return (
  <div className="reachmeentirecode">
    <div className='littletext'>
      <h1 className='header'>Now what ?</h1>
      <div className="barrebanner"></div>
      <p className='paragraph'>If you have any questions about my works, my current status, your ideas, anything else or if you just want to chat about tech, stacks, whatever comes to your mind do not hesitate and send me a message. I would be glad to chat with you by mail or in a cosy place with a coffee or a tea 🌊 </p>
    </div>
    <div className='thewholeform'>
      <div className='details'>
        <label for="firstName">First name</label>
        <input placeholder='...' type="text" name="firstName" className="firstName" tabIndex="1"/>
        <label for="lastName">Last name</label>
        <input placeholder='...' type="text" name="lastName" className="lastName" tabIndex="2"/>
      </div>
      <div className='mailadress'>
        <label for="Mail adress">Mail address</label>
        <input placeholder='...' type="text" name="mail" className="lastName" tabIndex="2"/>
      </div>
      <div className='subject'>
        <label for="Subject">Subject</label>
        <input placeholder='...' type="text" name="Subject" className="lastName" tabIndex="2"/>
      </div>
      <div className='message'>
        <label for="Your message">Your message</label>
        <input type="text" name="lastName" className="lastName" tabIndex="2"/>
      </div>
      <button type='submit'>Send</button>
    </div>
  </div>
  );
};

export default ReachMe;