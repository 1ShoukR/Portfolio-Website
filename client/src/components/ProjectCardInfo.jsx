import React from 'react';
import { gitHubLinkHandleClick } from '../actions/gitHubLinkHandleClick';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import '../Css/projects.css';

const ProjectCardInfo = (props) => {
  const [readMeLink, setReadMeLink] = useState(false);
    const showButton = (props) => {
    if (props?.project?.readmeArticle !== null) {
				console.log('this is readMeLink conditional');
				setReadMeLink(!readMeLink);
                return // put conditional component here (see navbar and navbar conditional)
			}
    };
return (
	<div className="projectCardInfoContainer">
		<div className="projectCardInfoTitle">
			<h1>{props?.project?.title}</h1>
		</div>
		<div className="projectCardInfoPicContainer">
			<img
				className="projectCardInfoPic"
				onClick={() => gitHubLinkHandleClick(props)}
				src={props?.project?.projectPic}
				alt="projectPicture"
			/>
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
			<div className="projectInfoTechUsedTitle">
				<h2>Tech Used in this Project</h2>
			</div>
			<div className="projectInfoTechUsedDescription">
				<p>{props?.project?.techUsed}</p>
			</div>
		</div>
		<div>
		</div>
	</div>
);
};

export default ProjectCardInfo;
