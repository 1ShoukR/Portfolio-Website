import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Navbar.css'



const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <nav>
      <div className='navbar-container'>
        <Link to="/ "></Link>
        <Link to="/About">
          <p>About</p>
          </Link>
      <Link to="/Resume">
        <p>Resume</p>
      </Link>
      <Link to="/Projects">
      <p>Projects</p>
      </Link>
      <Link to="/Contactme">
        <p>Contact Me</p>
      </Link>
      </div>
    </nav>
  );
}

export default Navbar