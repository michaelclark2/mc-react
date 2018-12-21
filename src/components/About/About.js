import React from 'react';
import Technologies from '../Technologies/Technologies';
import './About.scss';

class About extends React.Component {
  render () {
    return (
      <div className="About">
        <figure className="image profile">
          <img className="is-rounded" src="https://picsum.photos/500/500/?random" alt="profile pic"/>
        </figure>
        <div className="about-me">
          <div className="intro has-text-centered">
            <h3 className="title">Hi</h3>
            <h5 className="subtitle">Let's build things!</h5>
          </div>
          <p>A graphic artist turned developer, I enjoy creating unique and enjoyable experiences.  Software development was the only thing that seemed to satisfy my constant desire to learn and experiment, and it has led me down some very interesting paths.  If you want to know more about me and my journey, check out the projects I've done or the articles I have written or just send me an email!</p>
        </div>
        <Technologies />
      </div>

    );
  }
}
export default About;
