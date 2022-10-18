import React from 'react'
import { useState } from 'react';
import { Card } from '@mui/material';
import AboutCardInfo from './AboutCardInfo';

const AboutCard = () => {
    const [visibleBio, setVisibleBio] = useState(false);
    const handleClick = () => {
        console.log("I am clicking")
        setVisibleBio(!visibleBio)
    }
  return (
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
        variant="outlined"
        className="card"
    >
        <h1 className="aboutTitle" onClick={handleClick}>Click to learn more about me!</h1>
        {visibleBio ? <AboutCardInfo /> : ""}
    </Card>
    );
}

export default AboutCard