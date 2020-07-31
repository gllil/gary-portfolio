import React from "react";

function Portfolio() {
  return (
    <div className="container">
      <div className="row center project-section grey-text text-darken-2">
        <div className="col s12 m6">
          <div className="row">
            <h4 className="proj-description-title">
              InterCraft Auto Upholstery
            </h4>
            <a href="https://intercraftupholstery.com/" target="_blank">
              <img
                src="images/intercraftHome.PNG"
                alt="InterCraft Upholstery Website"
                width="200"
                className="project-image"
              />
            </a>
            <p>
              This is a Web App for a Auto Upholstery company. It contains a
              landing page, a Services page, and a Contact page with a contact
              form.
            </p>
          </div>
          <div className="row">
            <h5 className="proj-description-title">Technologies Used</h5>
            <ul>
              <li>HTML</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Express</li>
              <li>Node Mailer</li>
              <li>Axios</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        <div className="col s12 m6">
          <h5 className="proj-description-title">My Role</h5>
          <p>
            I created the design, layout, contact form, and backend for contact
            form submission. I also set up the hosting through Firebase.
          </p>
          <h5 className="proj-description-title">Project Difficulties</h5>
          <p>
            There was a bug when deploying to production. The build was taking
            my css and changing the opacity to 1%.
          </p>
          <h5 className="proj-description-title">My Solution</h5>
          <p>
            After running the build, I would go into build folder and manually
            adjust the opacity to the correct percentage.
          </p>
          <div>
            <a href="https://github.com/gllil/intercraft" target="_blank">
              <i className="fab fa-github fa-2x z-depth-3 git"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="row center project-section grey-text text-darken-2">
        <div className="col s12 m6">
          <div className="row">
            <h4 className="proj-description-title">Pawty Time!</h4>
            <a href="https://pawtytime.herokuapp.com/" target="_blank">
              <img
                src="images/pawtytime.PNG"
                alt="Actors Profile page image"
                width="200"
                className="project-image"
              />
            </a>
            <p>
              This application allows dog owners and dog walkers to schedule
              walks for their dogs. Dog owners can add or delete dogs and use or
              cancel appointments. Dog Walkers can add or delete time slots.
            </p>
          </div>
          <div className="row">
            <h5 className="proj-description-title">Technologies Used</h5>
            <ul>
              <li>HTML</li>
              <li>Materliaze CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Sequelize/MySQL</li>
              <li>Dog CEO API</li>
              <li>Node Express</li>
            </ul>
          </div>
        </div>
        <div className="col s12 m6">
          <h5 className="proj-description-title">My Role</h5>
          <p>
            I worked on creating the UI design, functionality, and linking it
            with the back end.
          </p>
          <h5 className="proj-description-title">Project Difficulties</h5>
          <p>
            Getting the back end connected to the front end was particularly
            chanllenging. Ajax calls and referencing the UI elements to them.
          </p>
          <h5 className="proj-description-title">My Solution</h5>
          <p>
            With help from my peers and teaching assistants I was able to find a
            solution for many of these referencing issues.
          </p>
          <div>
            <a href="https://github.com/hotwasubi/pawtyTime" target="_blank">
              <i className="fab fa-github fa-2x z-depth-3 git"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="row center project-section grey-text text-darken-2">
        <div className="col s12 m6">
          <div className="row">
            <h4 className="proj-description-title">Actors Profile</h4>
            <a href="https://gllil.github.io/rvm-grp-proj-1/" target="_blank">
              <img
                src="images/Actors-Profile.PNG"
                alt="Actors Profile page image"
                width="200"
                className="project-image"
              />
            </a>
            <p>
              This web application allows you to search any actor and findout
              more information about them. It gives a brief bio, shows movies
              known for and a synopsis, and recent news about the actor.
            </p>
          </div>
          <div className="row">
            <h5 className="proj-description-title">Technologies Used</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Google Maps API</li>
              <li>The Movie Database API</li>
            </ul>
          </div>
        </div>
        <div className="col s12 m6">
          <h5 className="proj-description-title">My Role</h5>
          <p>
            I partly assisted in creating some of the JavaScript code. I worked
            on the CSS styling using materialize CSS.
          </p>
          <h5 className="proj-description-title">Project Difficulties</h5>
          <p>
            Creating the google maps API was particularly challenging. Getting a
            API key is quite the process and not as easy as other API's. The
            second was getting it to show correctly and removing all of the
            additional clutter around the map.
          </p>
          <h5 className="proj-description-title">My Solution</h5>
          <p>
            After extensive research and help from my team, we were able
            activate our API key with Google. We were able to research and
            follow the instructions for what code was necessary to remove
            additional buttons on the map.
          </p>
          <div>
            <a href="https://github.com/gllil/rvm-grp-proj-1" target="_blank">
              <i className="fab fa-github fa-2x z-depth-3 git"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- <hr className="grey darken-2"> --> */}
      <div className="row center project-section grey-text text-darken-2">
        <div className="col s12 m6">
          <div className="row">
            <h4 className="proj-description-title">Password Generator</h4>
            <a
              href="https://gllil.github.io/PasswordGenerator/"
              target="_blank"
            >
              <img
                src="images/Password-Generator.PNG"
                alt="Password Generator Page Image"
                width="200"
                className="project-image"
              />
            </a>
            <p>
              This app allows you to create and customize a password of your
              choosing. It allows you to copy the password to your clipboard.
            </p>
          </div>
          <div className="row">
            <h5 className="proj-description-title">Technologies Used</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
        <div className="col s12 m6">
          <h5 className="proj-description-title">My Role</h5>
          <p>
            This was a homework assignment that help us learn some basic
            JavaScript functions.
          </p>
          <h5 className="proj-description-title">Project Difficulties</h5>
          <p>
            My main difficulty was finding the best way to randomize the
            different types of characters needed for the password and filter out
            any criteria not requested.
          </p>
          <h5 className="proj-description-title">My Solution</h5>
          <p>
            I realized the simplest way was the easiest way. I made Arrays of
            every type of character. Based on the input if it was true it would
            include it and if it was false it would not include the character.
            We used Math Random to randomize and return based on the length
            requested.
          </p>
          <div>
            <a
              href="https://github.com/gllil/PasswordGenerator"
              target="_blank"
            >
              <i className="fab fa-github fa-2x z-depth-3 git"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- <hr className="grey darken-2"> --> */}
      <div className="row center project-section grey-text text-darken-2">
        <div className="col s12 m6">
          <div className="row">
            <h4 className="proj-description-title">Weather Dashboard</h4>
            <a
              href="https://gllil.github.io/weather-dashboard/"
              target="_blank"
            >
              <img
                src="images/weather-dashboard.PNG"
                alt="weather dashboard page image"
                width="200"
                className="project-image"
              />
            </a>
            <p>
              This application allows you to input a city and it will show you
              the current weather of that city and also a five day forecast.
            </p>
          </div>
          <div className="row">
            <h5 className="proj-description-title">Technologies Used</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Open Weather API</li>
            </ul>
          </div>
        </div>
        <div className="col s12 m6">
          <h5 className="proj-description-title">My Role</h5>
          <p>
            This was an assignment given in className. It was an individual
            effort. I created it from the ground up.
          </p>
          <h5 className="proj-description-title">Project Difficulties</h5>
          <p>
            The challenge I ran into was that taking the dates from the API that
            were in unix code and convert that into a readable date. I also had
            trouble with setting up click events.
          </p>
          <h5 className="proj-description-title">My Solution</h5>
          <p>
            With much research I was able to find a method of converting the
            unix code. I put it in a function and ran it. I was also able to
            localize the click event so it would work properly.
          </p>
          <div>
            <a
              href="https://github.com/gllil/weather-dashboard"
              target="_blank"
            >
              <i className="fab fa-github fa-2x z-depth-3 git"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
