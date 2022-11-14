import React, { useState } from "react"
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import '../Css/Navbar.css'
import NavbarConditional from './NavbarConditional';



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
const handleToggle = () => {
	setNavbarOpen(!navbarOpen);
};
const closeMenu = () => {
	setNavbarOpen(false);
};
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn);
  const userAccountInfo = useSelector((state) => state.loggedIn.userLoginData)
  if (loggedIn) {
    return <NavbarConditional userAccountInfo={userAccountInfo} />;
  }
  return (
		<div className="navbar-container">
			<nav className="NAV">
				<button onClick={handleToggle}>
					{navbarOpen ? (
						<MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
					) : (
						<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
					)}
				</button>{' '}
				<ul className={`NAV-INNER ${navbarOpen ? ' showMenu' : ''}`}>
					<li>
						<Link onClick={() => closeMenu()} to="/">
							<p>Home</p>
						</Link>
					</li>
					<li>
						<Link onClick={() => closeMenu()} to="/About">
							<p>About</p>
						</Link>
					</li>
					<li>
						<Link onClick={() => closeMenu()} to="/Resume">
							<p>Resume</p>
						</Link>
					</li>
					<li>
						<Link onClick={() => closeMenu()} to="/Projects">
							<p>Projects</p>
						</Link>
					</li>
					<li>
						<Link onClick={() => closeMenu()} to="/Contact_Me">
							<p>Contact Me</p>
						</Link>
					</li>
					<li>
						<Link onClick={() => closeMenu()} to="/create_account">
							<p>Create an Account</p>
						</Link>
					</li>
					<li>
						<Link onClick={() => closeMenu()} to="/login">
							<p>Login</p>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar