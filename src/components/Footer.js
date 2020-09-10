import React from "react";
import "materialize-css";
// import { Footer } from "react-materialize"
// import StickyFooter from "react-sticky-footer"

function PageFooter() {
  return (
    <footer className="page-footer grey darken-2 container-fluid">
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <div className="col s12 center">
                  <a href="https://github.com/gllil" target="_blank">
                    <i className="fab fa-github fa-2x linksIcon"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gary-llil-17012746/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x linksIcon"></i>
                  </a>
                </div>
              </div>
              <div className="center"> © Copyright 2020 </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
