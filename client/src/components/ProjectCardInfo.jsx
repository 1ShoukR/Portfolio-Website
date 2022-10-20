import React from 'react'
import "../Css/projects.css"

const ProjectCardInfo = (props) => {
    console.log("this is projectCardInfo", props)
    const gitHubLinkHandleClick = () => {
        window.open(`${props?.project?.githubLink}`, '_blank');
    }
  return (
    <div className='projectCardInfoContainer'>
        <h1>
            {props?.project?.title}
        </h1>
        <div>
            <h1>Description</h1>
            <p>{props?.project?.description}</p>
        </div>
        <div>
            <button onClick={gitHubLinkHandleClick}>Github Link</button>
        </div>
    </div>
  )
}

export default ProjectCardInfo