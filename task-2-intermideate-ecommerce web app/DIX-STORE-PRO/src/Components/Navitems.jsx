import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/DIXIT.png";

const Navitems = () => {
  const [menuToggle, setmenuToggle] = useState(false);
  const [socialToggle, setsocialToggle] = useState(false);
  const [headerFixed, setheaderFixed] = useState(false);

  //add eventlistner
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setheaderFixed(true);
    } else {
      setheaderFixed(false);
    }
  });
  return (
    <header
      className={
        `header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`
      }
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className= {`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block">
                Login
              </Link>

              {/*MenuToggler*/}
              <div onClick={() => setmenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/*Socialtoggle*/}
              <div className="ellepsis-bar d-md-none" onClick={() => setsocialToggle(! socialToggle)} >
                <i className="icofont-info-square"></i>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
