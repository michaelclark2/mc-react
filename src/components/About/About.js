import React from 'react';
import './About.css';

class About extends React.Component {
  render () {
    return (
      <div className="About">
        <div className="hero is-fullheight intro">
          <div className="hero-body has-text-centered">
            <div className="container">
              <h1 className="title">Hi,</h1>
              <h2 className="subtitle">Let's build things.</h2>
            </div>
          </div>
        </div>
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h1 className="title">Technologies</h1>
                  <h2 className="subtitle">These are the skills and tools I have aquired along my journey</h2>
                </div>
                <div className="column">
                  {/* <Technologies /> */}
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
