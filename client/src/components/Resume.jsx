import React from 'react'
import me from "../assets/me.jpg"
import ResumePDF from "../assets/Rahmin Shoukoohi Resume.pdf"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import "../Css/resume.css"

const Resume = () => {
  return (
		<div className="wrapper">
			<div className="container">
				<div className="left_Side">
					<div className="profileText">
						<div className="imgBx">
							<img alt="me" className="photo" src={me} />
						</div>
						<br />
						<h2>
							Rahmin Shoukoohi <br />
							<span>Web Developer</span>
						</h2>
					</div>
					<div className="contactInfo">
						<h3 className="title">Contact Info</h3>
						<ul>
							<li>
								<span className="icon">
									<i className="fa fa-phone" aria-hidden="true"></i>
								</span>
								<span className="text">770-925-5248</span>
							</li>
							<li>
								<span className="icon">
									<i className="fa fa-envelope-o" aria-hidden="true"></i>
								</span>
								<span className="text">
									<a href="mailto: rahminshoukoohi@gmail.com">Send Email</a>
								</span>
							</li>
							<li>
								<span className="icon">
									<i className="fa fa-globe" aria-hidden="true"></i>
								</span>
								<span className="text">
									<a href="https://rahminshoukoohi.wixsite.com/mysite">
										Portfolio
									</a>
								</span>
							</li>
							<li>
								<span className="icon">
									<i className="fa fa-linkedin" aria-hidden="true"></i>
								</span>
								<span className="text">
									<a href="https://www.linkedin.com/in/rahmin-shoukoohi-155855235/">
										LinkedIn
									</a>
								</span>
							</li>
							<li>
								<span className="icon">
									<i className="fa fa-map-marker" aria-hidden="true"></i>
								</span>
								<span className="text">Atlanta, Georgia</span>
							</li>
						</ul>
					</div>
					<div className="contactInfo education">
						<h3 className="title">Education</h3>
						<ul>
							<li>
								<h5>2018 - 2022</h5>
								<h4>Bachelor's Degree in Biology Pre-Dental</h4>
								<h4>Georgia State University</h4>
							</li>
							<li>
								<h5>2022 - 2022</h5>
								<h4>
									Certificate of Completion: Computer Science and Software
									Development
								</h4>
								<h4>DigitalCrafts Web Development Bootcamp</h4>
							</li>
						</ul>
					</div>
					<div className="contactInfo language">
						<h3 className="title">Languages</h3>
						<ul>
							<li>
								<span className="text">English</span>
								<span className="percent">
									<div data-language="english"></div>
								</span>
							</li>
						</ul>
						<ul>
							<li>
								<span className="text">Farsi</span>
								<span className="percent">
									<div data-language="russian"></div>
								</span>
							</li>
						</ul>
						<ul>
							<li>
								<span className="text">Spanish</span>
								<span className="percent">
									<div data-language="french"></div>
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="right_Side">
					<div className="about">
						<h2 className="title2">Profile</h2>
						<div className="resumePDF">
							<a className="pdfDownload" href={ResumePDF} target="_blank">
								<p>Download my Resume here!</p>
								<PictureAsPdfIcon />
							</a>
						</div>
						<p>
							As a passionate and motivated professional, I’m constantly
							striving to improve my techniques, expand my skillset and find new
							opportunities to grow. Each of my projects - both solo and
							collaborative - have provided this growth and allowed me to
							establish myself within this competitive industry. Please enjoy my
							portfolio, and feel free to get in touch with any questions.
						</p>
					</div>
					<div className="about">
						<h2 className="title2">Experience</h2>
						<div className="box">
							<div className="year_company">
								<h5>2021 - 2022</h5>
								<h5>Built by Gamers</h5>
							</div>
							<div className="text">
								<h4>Professional Esports Athlete</h4>
								<p>
									● Engaged in team oriented practices that include, but is no
									limited to, a team of 7 individuals <br /> ● Oriented the
									practice flow from a week-to-week basis, and provided quality
									performance reviews to higher ups <br /> ● Traveled to
									multiple competitions both domestically and internationally{' '}
									<br /> ● Engaged in fan-revolved activities, including signing
									sessions, interviews, meet-and-greets, public appearances, and
									live competition for viewing purposes
								</p>
							</div>
						</div>
						<div className="box">
							<div className="year_company">
								<h5>2022 - 2022</h5>
								<h5>DigitalCrafts Web Development Bootcamp</h5>
							</div>
							<div className="text">
								<h4>Software Developer</h4>
								<p>
									● Enganged in classroom study of web development tools,
									including, but not limited to, Node.JS, Express.JS, REST APIs,
									Python, Git, SQL, PostgreSQL, Sequelize, Beekeeper, Postman,
									React, Redux, Javascript, Typescript, HTML5, APIs, CSS, and
									CSS Frameworks
									<br />● Participated in SCRUM and AGILE methodologies while
									developing software
								</p>
							</div>
						</div>
						<div className="box">
							<div className="year_company">
								<h5>2017 - 2019</h5>
								<h5>
									Atlanta Oral <br /> and Facial Surgery
								</h5>
							</div>
							<div className="text">
								<h4>Oral Surgery Intern</h4>
								<p>
									● Oversaw and created a daily patient schedule and shadowed
									under Dr. Wunderlee Jr. <br /> ● Maintained sanitation of the
									OR room <br /> ● Prepared utensils before patients are brought
									into the room <br /> ● Observed multiple OR surgeries and
									check ups from patient post OP check-ups
								</p>
							</div>
						</div>
					</div>
					<div className="skillsContainer">
						<div className="leftSideSkills">
							<div className="about skills">
								<h2 className="title2">Professionals skills</h2>
								<div className="box">
									<h1 className="frontend">Frontend</h1>
								</div>
								<div className="box">
									<h4>React.JS</h4>
								</div>
								<div className="box">
									<h4>Redux</h4>
								</div>
								<div className="box">
									<h4>JavaScript ES6</h4>
								</div>
								<div className="box">
									<h4>Typescript</h4>
								</div>
								<div className="box">
									<h4>HTML5</h4>
								</div>
								<div className="box">
									<h4>APIs</h4>
								</div>
								<div className="box">
									<h4>CSS</h4>
								</div>
								<div className="box">
									<h4>CSS Frameworks</h4>
								</div>
							</div>
						</div>
						<div className="about skills">
							<div className="rightSideSkills">
								<div className="box">
									<h1 className="backend">Backend</h1>
								</div>
								<div className="box">
									<h4>Node.JS</h4>
								</div>
								<div className="box">
									<h4>Express.JS</h4>
								</div>
								<div className="box">
									<h4>REST APIs</h4>
								</div>
								<div className="box">
									<h4>Python</h4>
								</div>
								<div className="box">
									<h4>Git</h4>
								</div>
								<div className="box">
									<h4>GitHub</h4>
								</div>
								<div className="box">
									<h4>SQL</h4>
								</div>
								<div className="box">
									<h4>PostgreSQL</h4>
								</div>
								<div className="box">
									<h4>Sequelize</h4>
								</div>
								<div className="box">
									<h4>Beekeeper Database Interface</h4>
								</div>
								<div className="box">
									<h4>Postman Frontend Simulator</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="about interest">
						<h2 className="title2">Interests</h2>
						<ul>
							<li>
								<i className="fa fa-book" aria-hidden="true"></i> Reading
							</li>
							<li>
								<i className="fa fa-gamepad" aria-hidden="true"></i> Gaming
							</li>
							<li>
								<i className="fa fa-cutlery" aria-hidden="true"></i> Cooking
							</li>
							<li>
								<i className="fa fa-microphone" aria-hidden="true"></i> Singing
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resume