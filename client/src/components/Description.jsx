import React from 'react';
import MyPic from '../assets/me.jpg';
import { Card } from '@mui/material';

const Description = () => {
return (
	<>
		<div className="myPic max-w-sm w-full lg:max-w-full lg:flex">
			<Card
				sx={{
					display: 'flex',
					width: '920px',
					flexDirection: 'row',
					padding: '25px',
					borderRadius: '16px',
					boxShadow: 3,
					bgcolor: 'text.secondary',
				}}>
				<div className="pictureContainer">
					<img
						className="myPicSpecifics rounded-md"
						src={MyPic}
						alt="me"
					/>
				</div>
				<div className="description">
					<p>
						I am incredibly passionate about all things tech! I have attended
						and graduated the DigitalCrafts Web Development Bootcamp to learn
						Full-Stack Web Development in order to jumpstart my career in tech,
						and it is the best decision I have ever made in my life. My love for
						coding continues to grow exponentially as I learn more and more
						about the intricacies and nuances of each language that I pursue!
					</p>
					<div>
						<a href="/Resume">
							<button>Resume</button>
						</a>
					</div>
					<div>
						<a href="/Contact_Me">
							<button>Contact Me</button>
						</a>
					</div>
				</div>
			</Card>
		</div>
	</>
);
};

export default Description;
