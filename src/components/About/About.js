import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
import profileImg from '../../img/profile.jpg';

class About extends React.Component {
  render () {
    return (
      <div className="About">
        <div className="hi has-text-centered section">
          <div className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <h3 className="title">Hi</h3>
              </div>
              <i className="fas fa-arrow-down down"></i>
            </div>
          </div>
        </div>
        <div className="intro has-text-centered section">
          <div className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <figure className="profile">
                  <img className="" src={profileImg} alt="profile pic" />
                </figure>
                <h3 className="title is-1">This is me</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="artist section">
          <div className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <h3 className="title is-1">As an artist,</h3>
                <p>I enjoy creating unique and enjoyable experiences. A graphic artist turned developer, creative problem solving is what I do best.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="activist section">
          <div className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <h3 className="title is-1">As an activist,</h3>
                <p>I thrive on making things that make a difference.  I've always wanted to change the world, and I have the tools and determination to do so.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="adventurer section">
          <div className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <h3 className="title is-1">As an adventurer,</h3>
                <p>I consistently challenge myself to be better.  Software development seems to be the only thing that satisfies my constant desire to learn and experiment.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="closing section">
          <div className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <h3 className="title is-1"><Link to="/skills">This is what I know</Link></h3>
                <h3 className="title is-1"><Link to="/projects">This is what I do</Link></h3>
                <h3 className="title is-1"><Link to="/blog">This is what I said</Link></h3>
                <h3 className="title is-1"><Link to="/contact">This is how to reach me</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default About;
