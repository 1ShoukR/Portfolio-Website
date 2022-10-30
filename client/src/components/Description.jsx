import React from 'react';
import MyPic from '../assets/me.jpg';
import { Button } from '@mui/material';
import { Card } from '@mui/material';

const Description = () => {
return (
	<>
		<div className="myPic max-w-sm w-full lg:max-w-full lg:flex">
			<Card
				sx={{
					display: 'flex',
					width: '1000px',
					flexDirection: 'row',
					padding: '40px',
					borderRadius: '16px',
					boxShadow: 3,
					bgcolor: 'text.secondary',
				}}>
				<div className="pictureContainer">
					<img className="myPicSpecifics" src={MyPic} alt="me" />
				</div>
				<div className="description">
					<h1 className='aLittleAboutMe'>A little about me</h1>
					<p>
						I am incredibly passionate about all things tech! I have attended
						and graduated the DigitalCrafts Web Development Bootcamp to learn
						Full-Stack Web Development in order to jumpstart my career in tech,
						and it is the best decision I have ever made in my life. My love for
						coding continues to grow exponentially as I learn more and more
						about the intricacies and nuances of each language that I pursue!
					</p>
					<div className="buttonWrapper">
						<div>
							<a href="/Resume">
								<Button
									variant="outlined"
									sx={{
										padding: '10px',
										color: '#F0EAD6',
									}}>
									Resume
								</Button>
							</a>
						</div>
						<div>
							<a href="/Contact_Me">
								<Button
									variant="outlined"
									sx={{
										padding: '10px',
										color: '#F0EAD6',
									}}>
									Contact Me
								</Button>
							</a>
						</div>
					</div>
				</div>
			</Card>
		</div>
	</>
);
};

export default Description;
