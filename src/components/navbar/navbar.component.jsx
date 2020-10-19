import React, { useState } from "react";
import logo from "../../static/images/logo.png";
import "./navbar.styles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const changeNavbar = () => {
    if (window.scrollY >= 170) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(navbar);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <div className={navbar ? "main-navbar active" : "main-navbar"}>
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="logo" loading="lazy" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Ground-Truth Data
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                How it Works
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Fee Structure
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Example Deliverables
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Submission Portal
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                <button>Sign in</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
