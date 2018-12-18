import React from 'react';
import './Contact.scss';
import ContactForm from '../ContactForm/ContactForm';

class Contact extends React.Component {
  render () {
    return (
      <div className="Contact columns">
        <aside className="column is-3">
          <h1 className="title is-3">Contact</h1>
          <div className="menu">
            <ul className="menu-list">
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/michaelclark2"><i className="fab fa-github-alt"></i>&nbsp; GitHub</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michaelwclark2/"><i className="fab fa-linkedin"></i>&nbsp; LinkedIn</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/greasewizard/"><i className="fab fa-codepen"></i>&nbsp; CodePen</a></li>
            </ul>
          </div>
        </aside>
        <main className="column">
          <ContactForm />
        </main>
      </div>
    );
  }
};

export default Contact;
