import React from 'react';
import Technologies from '../Technologies/Technologies';
import './About.scss';

class About extends React.Component {
  render () {
    return (
      <div className="About">
        <div className="about-me section">
          <div className="columns">
            <div className="column">
              <figure className="image profile">
                <img className="is-rounded" src="https://picsum.photos/500/500/?random" alt="profile pic"/>
              </figure>
            </div>
            <div className="column">
              <div className="intro has-text-centered">
                <h3 className="title">Hi</h3>
                <h5 className="subtitle">Let's build things!</h5>
              </div>
              <p>I enjoy creating unique and enjoyable experiences. A graphic artist turned developer, software development was the only thing that seemed to satisfy my constant desire to learn and experiment.</p>
            </div>
          </div>
        </div>
        <Technologies />
      </div>

    );
  }
}
export default About;
