import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a href="#" className="brand-logo">
            <span className="material-symbols-outlined logo-icon">public</span>
            <span>Holiday Finder</span>
          </a>
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

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Toggle theme">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
          <button className="icon-button" aria-label="Settings">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
