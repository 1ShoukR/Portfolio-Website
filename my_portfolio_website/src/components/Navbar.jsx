import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <nav>
      <div>
        <Link to="/ ">

        </Link>
        <Link
          to="/About"
        >
          <p>About</p>
        </Link>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu" style={{ display: "loggedIn" ? 'none' : 'auto' }}>
        <li>
          <Link to="/"> Home
          </Link>
        </li>
        <li>
          <Link to="/"
          >
          </Link>
        </li>
        <li>
          <Link
            to="/"
          >
            Login
          </Link>
        </li>
      </ul>
      <ul className="menu" style={{ display: "loggedIn" ? 'auto' : 'none' }}>
        <li>
          <Link to="/"
          >
          </Link>
        </li>
        <li>
          <Link
            to="/"
          >
          </Link>
        </li>
        <li>
          <Link
            to="/account_information"
          >
            My Account
          </Link>
        </li>
        <li>
          <Link
          >       </Link>
        </li>
        <li>
          <button
            className="logout"
            onClick={() => {}}>Sign Out</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar