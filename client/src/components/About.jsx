import React from 'react'
import "../Css/about.css"
import { useState } from 'react'
import { Card } from '@mui/material';
import AboutCard from './AboutCard';


export const About = () => {
  return (
    <div className='aboutPageContainer'>
      <AboutCard/>
    </div>
  )
}
