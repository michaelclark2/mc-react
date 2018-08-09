import React from 'react';
import Technologies from '../Technologies/Technologies';
import './About.css';

class About extends React.Component {
  render () {
    return (
      <div className="About">
        <div className="hero is-fullheight intro">
          <div className="hero-body has-text-centered">
            <div className="container is-fluid">
              <h1 className="title">Hi,</h1>
              <h2 className="subtitle">Let's build things.</h2>
              <i className="fas fa-chevron-down down"></i>
            </div>
          </div>
        </div>
        <div className="hero is-fullheight techs">
          <div className="hero-body">
            <div className="columns">
              <div className="column hero-title">
                <h1 className="title">Technologies</h1>
                <h2 className="subtitle">My skills and tools</h2>
              </div>
              <div className="column">
                <Technologies />
              </div>
            </div>
          </div>
        </div>
        <div className="hero is-fullheight work">
          <div className="hero-body">
            <div className="container is-fluid">
              <div className="columns">
                <div className="column hero-title">
                  <h1 className="title has-text-right">Work</h1>
                  <h2 className="subtitle has-text-right">Where I've been</h2>
                </div>
                <div className="column">
                  <div className="box">
                    <div className="content">
                      <h2>Nashville Software School</h2>
                      <small>2/2018 - Present</small>
                      <ul>
                        <li><p>Studied full-stack web development</p></li>
                        <li><p>Collaboration in mock-company environment</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="box">
                    <div className="content">
                      <h2>Volunteer State</h2>
                      <small>2/2012 - 12/2015</small>
                      <ul>
                        <li><p>Associate's degree in Fine Arts</p></li>
                        <li><p>Associate's degree in Liberal Arts</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="box">
                    <div className="content">
                      <h2>The Settler</h2>
                      <small>8/2013 - 12/2015</small>
                      <ul>
                        <li><p>Managed layout for weekly student newspaper</p></li>
                        <li><p>Design graphics for web and publication</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default About;
