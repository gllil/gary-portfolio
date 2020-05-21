import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4 center">
          <img
            src="./assets/ProfilePhoto.jpg"
            alt="Profile Photo"
            className="profile-photo"
          />
        </div>

        <div className="col s12 center m7 left  about-me-container">
          <h5 className="about-me-title grey-text text-darken-2">About Me</h5>
          <hr className="grey darken-2" />
          <p className="grey-text text-darken-2 about-me">
            I am a student at UCF coding boot camp. I have learned HTML, CSS,
            JavaScript, jQuery, and Node.js. I have been a student for about 3
            months and have worked on a few projects on my own and in a team,
            which you can find on my portfolio page. I believe my skills I have
            learned will shine in the work force. I have plenty to learn, but I
            am willing and capable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
