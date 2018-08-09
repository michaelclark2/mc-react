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
            </div>
          </div>
        </div>
        <div className="hero is-fullheight techs">
          <div className="hero-body">
            <div className="columns">
              <div className="column techs">
                <h1 className="title">Technologies</h1>
                <h2 className="subtitle">My skills and tools</h2>
              </div>
              <div className="column">
                <Technologies />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default About;
