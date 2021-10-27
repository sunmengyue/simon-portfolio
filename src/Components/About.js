import React from 'react';

const About = ({ data }) => {
  if (data) {
    var profilepic = 'images/' + data.image;
    var bio = data.bio;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
