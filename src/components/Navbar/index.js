import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Menu } from 'grommet';

import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar({ loggedIn }) {
  const navigate = useNavigate();
  let menuItems = [
    { label: 'Home', onClick: () => { navigate("/") } },
    { label: 'Movie list', onClick: () => { navigate("/movies") } },
    { label: 'Music List', onClick: () => { navigate("/musics") } },
    { label: 'About Movic', onClick: () => { navigate("/about") } },
  ];
  if (loggedIn) {
    menuItems.push(
      { label: 'Profile', onClick: () => { navigate("/profile") } },
      { label: 'Logout', onClick: () => { navigate("/logout") } }
    );
  } else {
    menuItems.push(
      { label: 'Login', onClick: () => { navigate("/login") } },
      { label: 'Register', onClick: () => { navigate("/register") } }
    )
  }

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Movic
      </Link>
      <Menu
        label="Menu"
        items={menuItems}
      />
      {/* <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Movie list
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/musics"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Music list
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About Movic
            </NavLink>
          </li>
          <IsLoggedIn loggedIn={loggedIn} />
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
