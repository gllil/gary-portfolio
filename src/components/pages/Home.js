import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4 center">
          <img
            src="./images/ProfilePhoto.jpg"
            alt="Profile"
            className="profile-photo"
          />
        </div>

        <div className="col s12 center m7 left grey-text text-darken-2 about-me-container">
          <h5 className="about-me-title grey-text text-darken-2">About Me</h5>
          <hr className="grey darken-2" />
          <p className="grey-text text-darken-2 about-me">
            Full Stack Web Developer with a Certificate in Full Stack Web
            Development from University of Central Florida. Working at Capco as
            a QA Analyst. Below are the skills I know:
          </p>
          <ul>
            <li>
              <h5>Frontend</h5>
              <ul>
                <li>HTML</li>
                <li>CSS and Bootstrap</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React.js</li>
              </ul>
            </li>
            <li>
              <h5>Backend</h5>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL/Sequelize</li>
                <li>Mongo/Mongoose</li>
                <li>MERN Stack</li>
                <li>Heroku</li>
                <li>Firebase</li>
              </ul>
            </li>
          </ul>
          <p>
            I continue strengthening my skills through personal projects and
            enjoy the work I do.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
