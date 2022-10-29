import React from "react";
import { Link } from 'react-router-dom';


const NavbarConditional = (props) => {
    console.log("This is props", props.userAccountInfo)
  return (
		<>
			<div className="navbar-container">
				<nav className="NAV">
					<ul className="NAV-INNER">
						<li>
							<Link to="/">
								<p>Home</p>
							</Link>
						</li>
						<li>
							<Link to="/About">
								<p>About</p>
							</Link>
						</li>
						<li>
							<Link to="/Resume">
								<p>Resume</p>
							</Link>
						</li>
						<li>
							<Link to="/Projects">
								<p>Projects</p>
							</Link>
						</li>
						<li>
							<Link to="/Contact_Me">
								<p>Contact Me</p>
							</Link>
						</li>
						<li>
							<Link to="/create_account">
								<button>Logout</button>
							</Link>
						</li>
						<li>
							<p>Welcome, {props?.userAccountInfo[1]?.firstName}</p>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default NavbarConditional;
