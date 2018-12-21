/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import './Contact.scss';
import ContactForm from '../ContactForm/ContactForm';

class Contact extends React.Component {
  render () {
    return (
      <div className="Contact section">
        <div className="menu has-text-centered">
          <ul className="menu-list">
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/michaelclark2"><i className="fab fa-github-alt"></i>&nbsp; GitHub</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michaelwclark2/"><i className="fab fa-linkedin"></i>&nbsp; LinkedIn</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/greasewizard/"><i className="fab fa-codepen"></i>&nbsp; CodePen</a></li>
          </ul>
        </div>
        <ContactForm />
      </div>
    );
  }
};

export default Contact;
