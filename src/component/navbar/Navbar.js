import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png"
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header sticky-bar headerC">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <a className="d-flex" href="/">
                  <img src={logoImg} id="logo-img" alt="logo"/>
                </a>
              </div>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu">
                <ul className="main-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/termsandcondtion">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/packages">All Packages</Link>
                  </li>

                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div
                className="burger-icon burger-icon-white"
                onClick={toggleMenu}
              >
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-right">
              <div className="block-signin">
                <Link
                  className="btn btn-default btn-shadow ml-40 hover-up"
                  to="/portal"
                >
                  Go to Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={isMenuOpen ? "mobile-navigation open" : "mobile-navigation"}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav id="mobile-Menu">
                  <div className="header-nav">
                    <nav className="nav-main-menu">
                      <ul className="main-menu mobile-menu-space">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                          <Link to="/termsandcondtion">Terms & Conditions</Link>
                        </li>

                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link to="/contactus">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
