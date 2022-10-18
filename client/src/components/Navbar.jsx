import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Navbar.css'



const Navbar = () => {
  const navigate = useNavigate()
  return (
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
              <p>Create an Account</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar