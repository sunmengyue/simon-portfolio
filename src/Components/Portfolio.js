import React from 'react';

const Portfolio = ({ data }) => {
  if (data) {
    var mstyle = data.mstyle;
    var mdes1 = mstyle.description1;
    var mdes2 = mstyle.description2;
    var remoteOptimal = data.remoteOptimal;
    var remotdes1 = remoteOptimal.description1;
    var remotdes2 = remoteOptimal.description2;
    var imgSrcM = mstyle.imgSrc;
    var imgSrcR = remoteOptimal.imgSrc;
    var mhref = mstyle.demoLink;
    var mgithub = mstyle.githubLink;
    var rhref = remoteOptimal.demoLink;
    var rgithub = remoteOptimal.githubLink;
  }

  return (
    <section id="portfolio">
      <div className="row project">
        <div className="three columns header-col">
          <h1>
            <span>MSTYLE</span>
          </h1>

          <div>
            <a
              href={mhref}
              target="_blank"
              rel="noreferrer"
              className="redirect"
            >
              live site
            </a>
          </div>
          <div>
            <a
              href={mgithub}
              target="_blank"
              rel="noreferrer"
              className="redirect"
            >
              Github repo
            </a>
          </div>
        </div>
        <br />
        <div className="nine columns">
          <div className="portfolio-img-container mstyle-container">
            <a href={mhref} target="_blank" rel="noreferrer">
              <img src={imgSrcM} alt="mtyle" />
            </a>
          </div>
          <br />
          <div>{mdes1}</div>
          <div>{mdes2}</div>
        </div>
      </div>

      {/* remote optimal */}
      <div className="row project">
        <div className="three columns">
          <h1>
            <span>Remote Optimal</span>
          </h1>

          <div>
            <a
              href={rhref}
              target="_blank"
              rel="noreferrer"
              className="redirect"
            >
              live site
            </a>
          </div>
          <div>
            <a
              href={rgithub}
              target="_blank"
              rel="noreferrer"
              className="redirect"
            >
              Github repo
            </a>
          </div>
          <br />
        </div>

        <div className="nine columns main-col">
          <div className="portfolio-img-container remote-container">
            <a href={rhref} target="_blank" rel="noreferrer">
              <img src={imgSrcR} alt="mstyle" />
            </a>
          </div>
          <br />
          <div>{remotdes1}</div>
          <div>{remotdes2}</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
