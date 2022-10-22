import React from 'react'
import { Card } from '@mui/material';
import ProjectCardInfo from './ProjectCardInfo';
import "../Css/projectsCard.css"

const ProjectsCard = (props) => {
    console.log("This is props", props?.projects[0])
  return (
    <div className='projectsCardContainer'>
      {props?.projects[0]?.map((project) => (
        <Card
        sx={{
            display: 'flex',
            marginTop: '300px',
            width: '920px',
            padding: '20px',
            flexDirection: 'column',
            borderRadius: '16px',
            boxShadow: 3,
            bgcolor: 'text.secondary',
          }}
        >
          <ProjectCardInfo project={project} />
        </Card>
      ))}
    </div>
  );
}

export default ProjectsCard