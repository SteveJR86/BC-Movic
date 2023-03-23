import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function IsLoggedIn({ loggedIn }) {
  if (loggedIn) {
    return (
      <>
        <li className="nav-item">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Logout
          </NavLink>
        </li>
      </>
    )
  } else {
    return (
      <>
        <li className="nav-item">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Register
          </NavLink>
        </li>
      </>
    )
  }
}


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar({ loggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Movic
      </Link>
      <div>
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
      </div>
    </nav>
  );
}

export default Navbar;
