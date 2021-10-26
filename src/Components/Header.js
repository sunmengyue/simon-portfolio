import React from 'react';
import TypeWriter from 'react-typewriter';

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
    var resumeDownload = data.resumedownload;
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h5>Hi, I'm Simon.</h5>
          <div className="dash"></div>
          <h2 className="responsive-headline">
            <TypeWriter typing={0.5}>
              {occupation ? `I'm a ${occupation}.` : null}
            </TypeWriter>
          </h2>
          <h3>
            Based in {city}. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
          <div className="download">
            <p>
              <a href={resumeDownload} className="button">
                <i className="fa fa-download" style={{ marginRight: 5 }}></i>
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
