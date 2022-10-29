import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Navbar.css'
import NavbarConditional from './NavbarConditional';



const Navbar = () => {
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn);
  console.log("This is loggedIn variable", loggedIn)
  const userAccountInfo = useSelector((state) => state.loggedIn.userLoginData)
  console.log("This is userAccountInfo", userAccountInfo)
  if (loggedIn) {
    return <NavbarConditional userAccountInfo={userAccountInfo} />;
  }
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
          <li>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar