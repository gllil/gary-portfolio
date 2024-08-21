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

        <div className="col s12 center m8 left grey-text text-darken-2 about-me-container">
          <h5 className="about-me-title grey-text text-darken-2">About Me</h5>
          <hr className="grey darken-2" />
          <p className="grey-text text-darken-2 about-me">
            I am a passionate Full Stack Web Developer with over 5 years of
            experience, holding a Certificate in Full Stack Web Development from
            the University of Central Florida. I have a strong foundation in
            building dynamic, responsive web applications and thrive in
            fast-paced environments. My experience spans roles such as a QA
            Engineer at Capco, where I focused on software quality and
            automation, and a Project Manager at Impartner, where I honed my
            leadership and project delivery skills. I enjoy solving complex
            problems and continuously learning the latest technologies. Below
            are some of the key skills I bring to every project:
          </p>
          <div className="row">
            <div className="col s12 center">
              <ul>
                <li>Front-end and back-end development</li>
                <li>Automation and QA testing</li>
                <li>Project management and team collaboration</li>
                <li>Full lifecycle development, from planning to deployment</li>
              </ul>
              <a
                className="btn waves-effect waves-light grey darken-1 center"
                href="/portfolio"
              >
                See Full Portfolio
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <h5>Technologies I Know</h5>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 l4">
              <h5>Frontend</h5>
              <ul>
                <li>HTML</li>
                <li>CSS and Bootstrap</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Python</li>
                <li>Angular</li>
                <li>Solid JS</li>
              </ul>
            </div>
            <div className="col s12 m6 l4">
              <h5>Backend</h5>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL/Sequelize</li>
                <li>Mongo/Mongoose</li>
                <li>MERN Stack</li>
                <li>Heroku</li>
                <li>Firebase</li>
                <li>Postman</li>
              </ul>
            </div>
            <div className="col s12 m12 l4">
              <h5>Test Automation</h5>
              <ul>
                <li>Rubymine</li>
                <li>Gherkin/Cucumber</li>
                <li>Selenium</li>
              </ul>
            </div>
          </div>
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
