import React from 'react';
import { gitHubLinkHandleClick } from '../actions/gitHubLinkHandleClick';
import { useState, useEffect } from 'react';
import '../Css/projects.css';

const ProjectCardInfo = (props) => {
  const [readMeLink, setReadMeLink] = useState(false);
//   const showMediumArticleLink = (props) => {
//       if (props?.project?.readmeArticle != null) {
//           console.log("this is readMeLink conditional")
//           setReadMeLink(!readMeLink);
//       }
//       };
return (
    <div className="projectCardInfoContainer">
        <div className='projectCardInfoTitle'>
            <h1>{props?.project?.title}</h1>
        </div>
        <div className='projectCardInfoPicContainer'>
        <img className='projectCardInfoPic' onClick={() => gitHubLinkHandleClick(props)} src={props?.project?.projectPic} alt="projectPicture" />
        </div>
        <div className="descriptionContainer">
        <div className="projectInfoDescription">
            <h1>Description</h1>
        </div>
        <div className="projectInfoDescription">
            <p>{props?.project?.description}</p>
        </div>
        </div>
    <div className="projectInfoTechUsedContainer">
        <div className='projectInfoTechUsedTitle'>
            <h2>Tech Used in this Project</h2>
        </div>
        <div className='projectInfoTechUsedDescription'>
            <p>{props?.project?.techUsed}</p>
        </div>
    </div>
        <div>
            {/* make turnery for articles that have a link to medium article. If the link is null, then do not display */}
        </div>
    </div>
);
};

export default ProjectCardInfo;
