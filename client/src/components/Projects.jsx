import React, { useEffect } from 'react'
import ProjectsCard from './ProjectsCard'
import { useDispatch, useSelector } from 'react-redux';
import setProjects from '../actions/setProjects';
import "../Css/projects.css"

const Projects = () => {
  const dispatch = useDispatch()
  const projects = useSelector((state) =>state.projects.projects)
  useEffect(() => {
    setProjects(dispatch)
  }, [dispatch])
  return (
		<div className="projectsContainer">
			<div className="projectsPageTitle">
				<h1>Here Are My Current Projects</h1>
			</div>
			<div>
				<p>Below is a list of projects that I have created.</p>
			</div>
			<div>
				<p>Click on the image to go to the respective GitHub repo</p>
			</div>
			<div className="projectsCard">
				<ProjectsCard projects={projects} />
			</div>
		</div>
	);
}

export default Projects