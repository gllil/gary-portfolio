import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./components.css"

function NavBar() {
  const location = useLocation();
  const sidenavRef = useRef()
    // var instances = M.Sidenav.init(sidenavRef, {});
 

  return (
    <div>
      <nav className="grey darken-2">
        <div className="nav-wrapper container">
          <Link to="/" className="right name-title">
            Gary Llil
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">
                About Me
              </Link>
            </li>
            <li>
              <Link className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="mobile-side" ref={sidenavRef} id="mobile-demo">
        <li>
          <a className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">
            About Me
          </a>
        </li>
        <li>
          <a className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="/portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="/contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
