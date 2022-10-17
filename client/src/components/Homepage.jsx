import React from 'react'
import MyPic from "../assets/me.jpg"
import "../Css/homepage.css"

export const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className='introTitle'>
        <h1>Hi. I'm Rahmin. </h1>
        <h4>Welcome to my website.</h4>
        <div className="picContainer">
          <img className="myPic" src={MyPic} alt="picture of me" />
        </div>
      </div>
      <div>
        <p>
          I am incredibly passionate about all things tech! I have attended and
          graduated the DigitalCrafts Web Development Bootcamp to learn
          Full-Stack Web Development in order to jumpstart my career in tech,
          and it is the best decision I have ever made in my life. My love for
          coding continues to grow exponentially as I learn more and more about
          the intricacies and nuances of each language that I pursue!
        </p>
      </div>
    </div>
  );
}


