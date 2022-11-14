import React from 'react'
import { Card } from '@mui/material';
import ProjectCardInfo from './ProjectCardInfo';
import "../Css/projectsCard.css"

const ProjectsCard = (props) => {
  return (
		<div className="projectsCardContainer">
			{props?.projects[0]?.map((project) => (
				<Card
					sx={{
						display: 'flex',
						width: {
							xs: '480px',
							sm: '760px',
							md: '1000px',
						},
						flexDirection: {
							xs: 'column',
							md: 'row',
							lg: 'row',
							xl: 'row',
						},
						padding: '40px',
						borderRadius: '16px',
						boxShadow: 3,
						bgcolor: 'text.secondary',
						gap: '30px',
						justifyContent: {
							xs: 'center',
							md: 'center',
							lg: 'center',
							xl: 'center',
						},
						alignItems: {
							xs: 'center',
							md: 'center',
							lg: 'center',
						},
					}}>
					<ProjectCardInfo project={project} />
				</Card>
			))}
		</div>
	);
}

export default ProjectsCard