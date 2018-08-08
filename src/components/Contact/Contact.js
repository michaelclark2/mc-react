import React from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';

class Contact extends React.Component {
  render () {
    return (
      <div className="Contact columns">
        <aside className="column is-3">
          <h1 className="title is-3">Contact</h1>
          <div className="menu">
            <ul className="menu-list">
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/michaelclark2">GitHub</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michaelwclark2/">LinkedIn</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/greasewizard/">CodePen</a></li>
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
