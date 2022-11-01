import React from 'react'
import "../Css/homepage.css"
import Description from './Description';
import Resume from './Resume'

export const Homepage = () => {
  return (
    <>
    <div>
      <div className="homepageContainer">
        <div className="introTitleContainer">
          <div className="picContainer">
            <div className="intro">
              <h1 className="text-3xl font-bold underline">Hi. I'm Rahmin. </h1>
              <h4>Welcome to my website.</h4>
            </div>
          </div>
          <Description/>
        </div>
      </div>
    </div>
    <div>
      
    </div>
    </>
  );
}


