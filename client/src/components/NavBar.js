import React from "react";
import { Link, useLocation } from "react-router-dom";
import "materialize-css";
import { NavItem, Navbar, Icon } from "react-materialize";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar
      alignLinks="left"
      brand={
        <Link className="right name-title" href="#">
          Gary Llil
        </Link>
      }
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
          <ul className="mobile-side">
        <li>
        <Link
          className={
            location.pathname === "/" ? "nav-link active" : "nav-link"
          }
          to="/"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          className={
            location.pathname === "/portfolio"
              ? "nav-link active"
              : "nav-link"
          }
          to="/portfolio"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          className={
            location.pathname === "/contact"
              ? "nav-link active"
              : "nav-link"
          }
          to="/contact"
        >
          Contact Me
        </Link>
      </li>
      </ul>
      }
    >
        
      <NavItem>
      <Link
                    className={
                      location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                    to="/"
                  >
                    About Me
                  </Link>
      </NavItem>
      <NavItem>
      <Link
                    className={
                      location.pathname === "/portfolio"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
      </NavItem>
      <NavItem>
      <Link
                    className={
                      location.pathname === "/contact"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/contact"
                  >
                    Contact Me
                  </Link>
      </NavItem>
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
                //       location.pathname === "/" ? "nav-link active" : "nav-link"
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
                //         ? "nav-link active"
                //         : "nav-link"
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
                //         ? "nav-link active"
                //         : "nav-link"
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
    //           <a className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">
    //             About Me
    //           </a>
    //         </li>
    //         <li>
    //           <a className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="/portfolio">
    //             Portfolio
    //           </a>
    //         </li>
    //         <li>
    //           <a className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="/contact">
    //             Contact Me
    //           </a>
    //         </li>
    //       </ul>

    // </div>
  );
}

export default NavBar;
