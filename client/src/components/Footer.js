import React from "react";
import "./components.css";

function Footer() {
  return (
    <footer class="page-footer grey darken-2">
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <div class="row">
                <div class="col s12 center">
                  <a href="https://github.com/gllil" target="_blank">
                    <i class="fab fa-github fa-2x linksIcon"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gary-llil-17012746/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin fa-2x linksIcon"></i>
                  </a>
                </div>
              </div>
              <div class="center"> © Copyright 2020 </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
