import React from 'react'
import { useState } from 'react';
import { Card } from '@mui/material';
import AboutCardInfo from './AboutCardInfo';

const AboutCard = () => {
    const [visibleBio, setVisibleBio] = useState(false);
    const handleClick = () => {
        setVisibleBio(!visibleBio)
    }
  return (
    <Card
        sx={{
        display: 'flex',
        marginTop: '100px',
        width: '920px',
        padding: '20px',
        flexDirection: 'column',
        borderRadius: '16px',
        boxShadow: 3,
        bgcolor: 'text.secondary',
        }}
        variant="outlined"
        className="card">
        <h1 className={`aboutTitle ${visibleBio ? "aboutTitleAfterClick" : ""}`} onClick={handleClick}>Click to learn more about me!</h1>
        {visibleBio ? <AboutCardInfo /> : "" }
    </Card>
    );
}

export default AboutCard