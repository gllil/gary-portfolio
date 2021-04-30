import React from "react";
import { Link } from "react-router-dom";
import "materialize-css";
import { NavItem, Navbar, Icon } from "react-materialize";

function NavBar() {
  return (
    <Navbar
      alignLinks="left"
      brand={
        <Link className="right name-title" to="/">
          Gary Llil
        </Link>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
      className="grey darken-2"
      sidenav={
        <div className="mobile-side-wrapper">
          <ul className="mobile-side">
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      }
    >
      <NavItem href="/">About Me</NavItem>
      <NavItem href="/portfolio">Portfolio</NavItem>
      <NavItem href="/contact">Contact Me</NavItem>
    </Navbar>

    //     <div>
    //   <nav className="grey darken-2">
    //     <div className="nav-wrapper container">
    //       <Link to="/" className="right name-title">
    //         Gary Llil
    //       </Link>
    //       <a href="#" data-target="mobile-demo" className="sidenav-trigger">
    //         <i className="material-icons">menu</i>
    //       </a>
    //       <ul id="nav-mobile" className="left hide-on-med-and-down">
    // <li>
    //   <Link
    //     className={
    //       location.pathname === "/" ? "active" : ""
    //     }
    //     to="/"
    //   >
    //     About Me
    //   </Link>
    // </li>
    // <li>
    //   <Link
    //     className={
    //       location.pathname === "/portfolio"
    //         ? "active"
    //         : ""
    //     }
    //     to="/portfolio"
    //   >
    //     Portfolio
    //   </Link>
    // </li>
    // <li>
    //   <Link
    //     className={
    //       location.pathname === "/contact"
    //         ? "active"
    //         : ""
    //     }
    //     to="/contact"
    //   >
    //     Contact Me
    //   </Link>
    // </li>
    //       </ul>
    //     </div>
    //   </nav>

    //       <ul className="sidenav mobile-side" id="mobile-demo">
    //         <li>
    //           <a className={location.pathname === "/" ? "active" : ""} to="/">
    //             About Me
    //           </a>
    //         </li>
    //         <li>
    //           <a className={location.pathname === "/portfolio" ? "active" : ""} to="/portfolio">
    //             Portfolio
    //           </a>
    //         </li>
    //         <li>
    //           <a className={location.pathname === "/contact" ? "active" : ""} to="/contact">
    //             Contact Me
    //           </a>
    //         </li>
    //       </ul>

    // </div>
  );
}

export default NavBar;
