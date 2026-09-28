import { NavLink, Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="brand-logo">
            <span className="material-symbols-outlined logo-icon">public</span>
            <span>Holiday Finder</span>
          </Link>
        </div>

        <nav className="nav-menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink to="/countries" className="nav-link">
            Countries
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
