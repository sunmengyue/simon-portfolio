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
            alt="Simon's profilepic"
          />
        </div>
        <div className="nine columns main-col">
          <div className="row">
            <h2>About Me</h2>
            <p>{bio}</p>
          </div>
          <div className="row">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <h2 style={{ marginRight: 5 }}>Frontend</h2>
              <p> : Javascript, HTML, CSS</p>
            </div>
            <div className="skill-container">
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/js.png"
                  alt="js"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/html5.png"
                  alt="html5"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/css3.png"
                  alt="css3"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <h2 style={{ marginRight: 5 }}>Frameworks</h2>
              <p>: React, Redux, Tailwind CSS</p>
            </div>
            <div className="skill-container">
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/react.png"
                  alt="react"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/redux.png"
                  alt="redux"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/tailwindcss.png"
                  alt="tailwindcss"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <h2 style={{ marginRight: 5 }}>Backend & Database </h2>
              <p>: Node.js, Express, MongoDB, Mongoose, MySQL</p>
            </div>
            <div className="skill-container">
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/nodejs.png"
                  alt="nodejs"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/express.png"
                  alt="express"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/mongoDB.png"
                  alt="mongodb"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/mongoose.png"
                  alt="mongoose"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/mysql.png"
                  alt="mysql"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <h2 style={{ marginRight: 5 }}>Tools</h2>
              <p> : Postman, Github</p>
            </div>
            <div className="skill-container">
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/postman.png"
                  alt="postman"
                />
              </div>
              <div>
                <img
                  className="skill-icon"
                  src="./images/skills/github.png"
                  alt="github"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
